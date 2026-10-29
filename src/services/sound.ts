// Web Audio API synthesizers for Duolingo-style sound effects + Multi-Character Neural Japanese Voice Engine

export interface CharacterVoiceProfile {
  id: string;
  name: string;
  japaneseName: string;
  avatar: string;
  role: string;
  gender: 'female' | 'male';
  neuralVoiceId?: 'jp_001' | 'jp_003' | 'jp_005' | 'jp_006';
  pitch: number;
  rate: number;
  samplePhrase: string;
}

export const CHARACTER_VOICES: CharacterVoiceProfile[] = [
  {
    id: 'mary',
    name: 'Mary (Voz Original)',
    japaneseName: 'メアリー',
    avatar: '👱‍♀️',
    role: 'Voz japonesa original por defecto',
    gender: 'female',
    neuralVoiceId: undefined, // Keeps 100% original voice
    pitch: 1.0,
    rate: 0.9,
    samplePhrase: 'こんにちは！メアリーです。よろしくお願いします！'
  },
  {
    id: 'takeshi',
    name: 'Takeshi',
    japaneseName: 'たけし',
    avatar: '👦',
    role: 'Voz masculina nativa joven',
    gender: 'male',
    neuralVoiceId: 'jp_006',
    pitch: 1.0,
    rate: 1.0,
    samplePhrase: 'やあ、ぼくはたけしです。いっしょに勉強しよう！'
  },
  {
    id: 'yamashita',
    name: 'Prof. Yamashita',
    japaneseName: '山下先生',
    avatar: '👨‍🏫',
    role: 'Voz masculina nativa pausada',
    gender: 'male',
    neuralVoiceId: 'jp_006',
    pitch: 0.95,
    rate: 0.88,
    samplePhrase: 'みなさん、こんにちは。今日も日本語をがんばりましょう。'
  },
  {
    id: 'michiko',
    name: 'Michiko',
    japaneseName: 'みちこ',
    avatar: '👩',
    role: 'Voz femenina cálida y suave',
    gender: 'female',
    neuralVoiceId: 'jp_005',
    pitch: 1.0,
    rate: 0.95,
    samplePhrase: 'はじめまして、みちこです。いいお天気ですね。'
  },
  {
    id: 'robert',
    name: 'Robert',
    japaneseName: 'ロバート',
    avatar: '👱‍♂️',
    role: 'Voz masculina nativa animada',
    gender: 'male',
    neuralVoiceId: 'jp_006',
    pitch: 1.03,
    rate: 0.97,
    samplePhrase: 'こんにちは、ロバートです。日本語がおもしろいです！'
  },
  {
    id: 'sora',
    name: 'Sora',
    japaneseName: 'ソラ',
    avatar: '👧',
    role: 'Voz femenina juvenil y alegre',
    gender: 'female',
    neuralVoiceId: 'jp_003',
    pitch: 1.0,
    rate: 0.96,
    samplePhrase: 'こんにちは！ソラといっしょに楽しく練習しましょう！'
  },
  {
    id: 'ken',
    name: 'Ken',
    japaneseName: 'けん',
    avatar: '🧑',
    role: 'Voz masculina nativa serena',
    gender: 'male',
    neuralVoiceId: 'jp_006',
    pitch: 0.98,
    rate: 0.93,
    samplePhrase: 'こんにちは、けんです。ゆっくり話しましょう。'
  },
  {
    id: 'sue',
    name: 'Sue',
    japaneseName: 'スー',
    avatar: '👩‍🦱',
    role: 'Voz femenina clara y tranquila',
    gender: 'female',
    neuralVoiceId: 'jp_001',
    pitch: 1.0,
    rate: 0.93,
    samplePhrase: 'こんにちは、スーです。毎日少しずつ練習しています。'
  }
];

class SoundService {
  private audioCtx: AudioContext | null = null;
  private isEnabled: boolean = true;
  private defaultVoiceId: string = 'mary';
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private activeAudio: HTMLAudioElement | null = null;
  private sequenceTimer: number | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  // In-memory audio cache for 0ms instantaneous replay
  private audioCache: Map<string, HTMLAudioElement> = new Map();

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

  public setDefaultVoice(voiceId: string) {
    if (CHARACTER_VOICES.some(v => v.id === voiceId)) {
      this.defaultVoiceId = voiceId;
    }
  }

  public getDefaultVoice(): string {
    return this.defaultVoiceId;
  }

  public getCharacterProfile(speakerOrVoiceId?: string): CharacterVoiceProfile {
    if (!speakerOrVoiceId) {
      return CHARACTER_VOICES.find(v => v.id === this.defaultVoiceId) || CHARACTER_VOICES[0];
    }

    // 1. Direct ID match
    const direct = CHARACTER_VOICES.find(v => v.id === speakerOrVoiceId.toLowerCase());
    if (direct) return direct;

    // 2. Match by Genki character name in Japanese or English
    const s = speakerOrVoiceId.toLowerCase();
    if (s.includes('メアリー') || s.includes('mary')) return CHARACTER_VOICES.find(v => v.id === 'mary')!;
    if (s.includes('たけし') || s.includes('takeshi') || s.includes('きむら')) return CHARACTER_VOICES.find(v => v.id === 'takeshi')!;
    if (
      s.includes('やました') ||
      s.includes('先生') ||
      s.includes('profesor') ||
      s.includes('ぶちょう') ||
      s.includes('しゃちょう') ||
      s.includes('jefe') ||
      s.includes('いしゃ') ||
      s.includes('doctor')
    ) {
      return CHARACTER_VOICES.find(v => v.id === 'yamashita')!;
    }
    if (
      s.includes('みちこ') ||
      s.includes('michiko') ||
      s.includes('おかあさん') ||
      s.includes('ホストマザー') ||
      s.includes('madre') ||
      s.includes('ウェイトレス')
    ) {
      return CHARACTER_VOICES.find(v => v.id === 'michiko')!;
    }
    if (s.includes('ロバート') || s.includes('robert') || s.includes('ジョン') || s.includes('john')) {
      return CHARACTER_VOICES.find(v => v.id === 'robert')!;
    }
    if (s.includes('ソラ') || s.includes('sora')) {
      return CHARACTER_VOICES.find(v => v.id === 'sora')!;
    }
    if (
      s.includes('けん') ||
      s.includes('ken') ||
      s.includes('てんいん') ||
      s.includes('えきいん') ||
      s.includes('どろぼう')
    ) {
      return CHARACTER_VOICES.find(v => v.id === 'ken')!;
    }
    if (s.includes('スー') || s.includes('sue')) {
      return CHARACTER_VOICES.find(v => v.id === 'sue')!;
    }

    // 3. Deterministic hash fallback so any other speaker name gets a consistent distinct voice
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
      hash = (hash * 31 + s.charCodeAt(i)) % CHARACTER_VOICES.length;
    }
    return CHARACTER_VOICES[Math.abs(hash) % CHARACTER_VOICES.length];
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

  // Only returns a system voice if it genuinely matches the requested gender (never pitch-shifts a female voice to fake a male!)
  private findNativeSystemVoiceForGender(jaVoices: SpeechSynthesisVoice[], gender: 'male' | 'female'): SpeechSynthesisVoice | null {
    if (jaVoices.length === 0) return null;
    const maleHints = ['ichiro', 'otoya', 'keita', 'takumi', 'daichi', 'naoki', 'male', '男'];
    const femaleHints = ['haruka', 'ayumi', 'nanami', 'kyoko', 'sayaka', 'mizuki', 'female', '女'];

    if (gender === 'male') {
      return jaVoices.find(v => maleHints.some(h => v.name.toLowerCase().includes(h))) || null;
    }
    return jaVoices.find(v => femaleHints.some(h => v.name.toLowerCase().includes(h))) || jaVoices[0];
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

  // Preload audio into memory cache in the background for zero-latency instant clicks
  public preloadAudio(text: string) {
    const cleanText = text.replace(/\[.*?\]/g, '').trim();
    if (!cleanText || this.audioCache.has(cleanText)) return;

    try {
      const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleanText)}&le=jap`;
      const audio = new Audio();
      audio.preload = 'auto';
      audio.src = url;
      this.audioCache.set(cleanText, audio);
    } catch (_) {}
  }

  // Play neural Japanese voice (real Male jp_006 or distinct Female jp_001/jp_003/jp_005)
  private async playNeuralCharacterVoice(
    text: string,
    rate: number,
    profile: CharacterVoiceProfile
  ): Promise<boolean> {
    if (!profile.neuralVoiceId || text.length > 90) return false;

    const cacheKey = `${profile.neuralVoiceId}:${text}`;
    try {
      if (this.activeAudio) {
        this.activeAudio.pause();
        this.activeAudio = null;
      }

      let audio = this.audioCache.get(cacheKey);
      if (!audio) {
        const res = await fetch('https://tiktok-tts.weilnet.workers.dev/api/generation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text,
            voice: profile.neuralVoiceId
          })
        });
        if (!res.ok) return false;
        const data = await res.json();
        if (!data || !data.success || !data.data) return false;

        audio = new Audio(`data:audio/mp3;base64,${data.data}`);
        this.audioCache.set(cacheKey, audio);
      } else {
        audio.currentTime = 0;
      }

      this.activeAudio = audio;
      const baseScale = rate / 0.9;
      audio.playbackRate = Math.max(0.6, Math.min(1.25, profile.rate * baseScale));
      audio.volume = 0.9;

      await audio.play();
      return true;
    } catch {
      return false;
    }
  }

  // Play audio stream from public Japanese pronunciation dictionary
  private playOnlineAudio(text: string, rate: number = 0.9): Promise<boolean> {
    return new Promise((resolve) => {
      try {
        if (this.activeAudio) {
          this.activeAudio.pause();
          this.activeAudio = null;
        }

        let audio = this.audioCache.get(text);
        if (!audio) {
          const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=jap`;
          audio = new Audio(url);
          audio.preload = 'auto';
          this.audioCache.set(text, audio);
        } else {
          audio.currentTime = 0;
        }

        this.activeAudio = audio;
        audio.playbackRate = Math.max(0.55, Math.min(1.2, rate));
        audio.volume = 0.85;

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => resolve(true))
            .catch((err) => {
              console.warn('Audio play notice:', err);
              resolve(false);
            });
        } else {
          resolve(true);
        }
      } catch (e) {
        console.warn('Online audio exception:', e);
        resolve(false);
      }
    });
  }

  // Speak Japanese with genuine character voices (real male neural voice for men, original voice for Mary)
  public async speakJapanese(text: string, rate: number = 0.9, speakerOrVoiceId?: string): Promise<void> {
    if (this.sequenceTimer) {
      window.clearTimeout(this.sequenceTimer);
      this.sequenceTimer = null;
    }

    const cleanText = text.replace(/\[.*?\]/g, '').trim();
    if (!cleanText) return;

    this.getAudioContext();

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (_) {}
    }

    const charProfile = this.getCharacterProfile(speakerOrVoiceId);

    // 1. If the character has a dedicated neural voice (e.g. Takeshi/Yamashita/Robert/Ken male jp_006, or Sora/Michiko/Sue),
    // play the real neural voice first so male characters sound genuinely male!
    if (charProfile.neuralVoiceId) {
      const playedNeural = await this.playNeuralCharacterVoice(cleanText, rate, charProfile);
      if (playedNeural) return;
    }

    // 2. For Mary (Original Voice) or fallback when offline/long text: use local system voice if matching gender
    const jaVoices = this.getAvailableJapaneseVoices();
    const matchedSystemVoice =
      charProfile.id === 'mary'
        ? jaVoices[0] || null
        : this.findNativeSystemVoiceForGender(jaVoices, charProfile.gender);

    if (matchedSystemVoice && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }

        const utterance = new SpeechSynthesisUtterance(cleanText);
        this.activeUtterance = utterance;
        (window as unknown as { __duo_utt: SpeechSynthesisUtterance }).__duo_utt = utterance;

        utterance.voice = matchedSystemVoice;
        utterance.lang = matchedSystemVoice.lang || 'ja-JP';
        utterance.rate = Math.max(0.55, Math.min(1.25, rate * (charProfile.rate / 0.9)));
        utterance.pitch = charProfile.pitch;
        utterance.volume = 0.85;

        utterance.onend = () => {
          this.activeUtterance = null;
        };

        utterance.onerror = () => {
          this.activeUtterance = null;
          this.playOnlineAudio(cleanText, rate);
        };

        window.speechSynthesis.speak(utterance);
        return;
      } catch (_) {}
    }

    // 3. Final fallback
    await this.playOnlineAudio(cleanText, rate);
  }

  // Play an entire multi-speaker dialogue sequentially using each character's own voice
  public speakDialogueSequence(
    lines: { speaker: string; audioText: string }[],
    rate: number = 0.9,
    onLineStart?: (idx: number) => void,
    onComplete?: () => void
  ) {
    if (this.sequenceTimer) {
      window.clearTimeout(this.sequenceTimer);
      this.sequenceTimer = null;
    }
    if (!lines || lines.length === 0) return;

    let currentIdx = 0;
    const playStep = () => {
      if (currentIdx >= lines.length) {
        onComplete?.();
        return;
      }
      const line = lines[currentIdx];
      onLineStart?.(currentIdx);
      this.speakJapanese(line.audioText, rate, line.speaker);

      const waitMs = Math.max(2600, line.audioText.length * (rate < 0.75 ? 290 : 210) + 800);
      currentIdx++;
      this.sequenceTimer = window.setTimeout(playStep, waitMs);
    };

    playStep();
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

    gain.gain.setValueAtTime(0.12, now);
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

    gain.gain.setValueAtTime(0.14, now);
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

    gain.gain.setValueAtTime(0.08, now);
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
      gain.gain.setValueAtTime(0.16, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.45);

      osc.start(noteTime);
      osc.stop(noteTime + 0.45);
    });
  }
}

export const sound = new SoundService();
