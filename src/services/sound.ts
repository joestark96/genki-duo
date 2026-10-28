// Web Audio API synthesizers for Duolingo-style sound effects + Resilient Japanese Audio & TTS

class SoundService {
  private audioCtx: AudioContext | null = null;
  private isEnabled: boolean = true;
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private activeAudio: HTMLAudioElement | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        // Voices loaded event
      };
    }
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

  // Speak Japanese using SpeechSynthesis with automatic fallback to high-fidelity Japanese audio stream
  public speakJapanese(text: string, rate: number = 0.85) {
    if (!this.isEnabled) return;
    const cleanText = text.replace(/\[.*?\]/g, '').trim();
    if (!cleanText) return;

    // 1. Stop any currently playing audio
    if (this.activeAudio) {
      this.activeAudio.pause();
      this.activeAudio.currentTime = 0;
      this.activeAudio = null;
    }

    // Fallback audio player (free reliable Japanese TTS stream)
    const playFallbackAudioStream = () => {
      try {
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(cleanText)}&tl=ja&client=tw-ob`;
        const audio = new Audio(url);
        this.activeAudio = audio;
        audio.playbackRate = Math.min(1.0, Math.max(0.7, rate));

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.warn('Fallback audio playback error (often requires a user gesture first):', err);
          });
        }
      } catch (e) {
        console.warn('Fallback audio element failed:', e);
      }
    };

    // 2. Try SpeechSynthesis first if native Japanese voice is installed in the OS/Browser
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
        window.speechSynthesis.cancel();

        const voices = window.speechSynthesis.getVoices();
        const jaVoice = voices.find(v => {
          const l = v.lang.toLowerCase();
          return l.startsWith('ja') || l.includes('jp') || v.name.toLowerCase().includes('japan');
        });

        if (jaVoice) {
          const utterance = new SpeechSynthesisUtterance(cleanText);
          // Retain utterance in instance property so Chrome's Garbage Collector doesn't kill it mid-speech!
          this.activeUtterance = utterance;
          utterance.voice = jaVoice;
          utterance.lang = 'ja-JP';
          utterance.rate = rate;
          utterance.pitch = 1.0;

          utterance.onend = () => {
            this.activeUtterance = null;
          };

          utterance.onerror = (err) => {
            console.warn('SpeechSynthesis reported error, attempting online fallback:', err);
            this.activeUtterance = null;
            playFallbackAudioStream();
          };

          window.speechSynthesis.speak(utterance);
          return;
        }
      } catch (e) {
        console.warn('SpeechSynthesis initialization failed, switching to audio stream:', e);
      }
    }

    // 3. If no local Japanese voice installed in Windows or browser, play the high-clarity native audio stream!
    playFallbackAudioStream();
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
