// Web Audio API synthesizers for Duolingo-style sound effects + Resilient Japanese Audio & TTS

class SoundService {
  private audioCtx: AudioContext | null = null;
  private isEnabled: boolean = true;
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private activeAudio: HTMLAudioElement | null = null;
  private voices: SpeechSynthesisVoice[] = [];

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.loadVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        this.loadVoices();
      };
    }
  }

  private loadVoices() {
    try {
      this.voices = window.speechSynthesis.getVoices() || [];
    } catch (_) {}
  }

  public getAvailableJapaneseVoices(): SpeechSynthesisVoice[] {
    if (this.voices.length === 0 && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.loadVoices();
    }
    return this.voices.filter(v => {
      const l = (v.lang || '').toLowerCase();
      const n = (v.name || '').toLowerCase();
      return l.startsWith('ja') || l.includes('jp') || n.includes('japan') || n.includes('kyoko') || n.includes('ichiro') || n.includes('ayumi');
    });
  }

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {});
    }
    return this.audioCtx;
  }

  public setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
  }

  public getEnabled(): boolean {
    return this.isEnabled;
  }

  // Play audio stream from public Japanese pronunciation dictionary
  private playOnlineAudio(text: string, rate: number = 1.0): Promise<boolean> {
    return new Promise((resolve) => {
      try {
        if (this.activeAudio) {
          this.activeAudio.pause();
          this.activeAudio = null;
        }

        // Youdao Japanese audio API (public, supports CORS, returns real MP3 for any kanji/kana)
        const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=jap`;
        const audio = new Audio(url);
        this.activeAudio = audio;
        audio.playbackRate = Math.max(0.6, Math.min(1.2, rate));

        audio.oncanplaythrough = () => {
          audio.play().then(() => resolve(true)).catch((e) => {
            console.warn('Audio play error:', e);
            resolve(false);
          });
        };

        audio.onerror = () => {
          console.warn('Online Japanese audio stream failed to load');
          resolve(false);
        };

        // Fallback timeout in case network hangs
        setTimeout(() => resolve(false), 3000);
      } catch (e) {
        console.warn('Online audio exception:', e);
        resolve(false);
      }
    });
  }

  // Speak Japanese using SpeechSynthesis with automatic fallback to Youdao Japanese audio stream
  public async speakJapanese(text: string, rate: number = 0.9): Promise<void> {
    const cleanText = text.replace(/\[.*?\]/g, '').trim();
    if (!cleanText) return;

    // Ensure AudioContext is awakened if present
    this.getAudioContext();

    const jaVoices = this.getAvailableJapaneseVoices();

    // Strategy 1: If browser / Windows HAS a Japanese voice installed, use native SpeechSynthesis
    if (jaVoices.length > 0 && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }

        const utterance = new SpeechSynthesisUtterance(cleanText);
        this.activeUtterance = utterance;
        (window as unknown as { __duo_utt: SpeechSynthesisUtterance }).__duo_utt = utterance;

        utterance.voice = jaVoices[0];
        utterance.lang = jaVoices[0].lang || 'ja-JP';
        utterance.rate = rate;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        let started = false;
        utterance.onstart = () => {
          started = true;
        };

        utterance.onerror = (e) => {
          console.warn('SpeechSynthesis error, falling back to online audio stream:', e);
          this.activeUtterance = null;
          this.playOnlineAudio(cleanText, rate);
        };

        utterance.onend = () => {
          this.activeUtterance = null;
        };

        window.speechSynthesis.speak(utterance);

        // Safety check: if SpeechSynthesis does not start within 400ms (common Windows silent failure), fallback to online audio!
        setTimeout(() => {
          if (!started && this.activeUtterance === utterance) {
            console.log('Native SpeechSynthesis did not start audio in time, using online stream fallback...');
            window.speechSynthesis.cancel();
            this.activeUtterance = null;
            this.playOnlineAudio(cleanText, rate);
          }
        }, 400);

        return;
      } catch (err) {
        console.warn('SpeechSynthesis invocation error:', err);
      }
    }

    // Strategy 2: If no Japanese voice is installed in Windows/Browser or SpeechSynthesis is not supported,
    // play the high-clarity Japanese native audio stream directly!
    await this.playOnlineAudio(cleanText, rate);
  }

  // Play Duolingo-style chime on correct answer (cheerful high arpeggio)
  public playCorrect() {
    if (!this.isEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    gain.connect(ctx.destination);
    osc.connect(gain);

    // Notes: C5 -> G5 -> C6 (bright and celebratory)
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(659.25, now + 0.08);
    osc.frequency.setValueAtTime(783.99, now + 0.16);
    osc.frequency.setValueAtTime(1046.50, now + 0.24);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

    osc.start(now);
    osc.stop(now + 0.6);
  }

  // Play Duolingo-style low buzz on wrong answer
  public playIncorrect() {
    if (!this.isEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    gain.connect(ctx.destination);
    osc.connect(gain);

    // Notes: D#3 -> C3 (low descent)
    osc.frequency.setValueAtTime(155.56, now);
    osc.frequency.linearRampToValueAtTime(130.81, now + 0.25);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.start(now);
    osc.stop(now + 0.4);
  }

  // Play bubble pop when selecting or moving words
  public playTap() {
    if (!this.isEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    gain.connect(ctx.destination);
    osc.connect(gain);

    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.04);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  // Play lesson completion victory fanfare
  public playLessonComplete() {
    if (!this.isEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C E G C E
    const now = ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.connect(gain);
      gain.connect(ctx.destination);

      const noteTime = now + idx * 0.12;
      osc.frequency.setValueAtTime(freq, noteTime);
      gain.gain.setValueAtTime(0.2, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.45);

      osc.start(noteTime);
      osc.stop(noteTime + 0.45);
    });
  }
}

export const sound = new SoundService();
