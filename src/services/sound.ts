import { LOCAL_AUDIO_MANIFEST } from '../data/localAudioManifest';
import { getOfflineAudioKey } from '../utils/audioHash';
import { audioStorage } from './audioStorage';
// Web Audio API synthesizers for Duolingo-style sound effects + Multi-Character Neural Japanese Voice Engine

export type NeuralJapaneseVoiceId =
  | 'jp_001'
  | 'jp_003'
  | 'jp_005'
  | 'jp_006'
  | 'jp_male_osada'
  | 'jp_male_shuichiro'
  | 'jp_male_matsudake'
  | 'jp_male_hikakin'
  | 'jp_female_rei';

export interface CharacterVoiceProfile {
  id: string;
  name: string;
  japaneseName: string;
  avatar: string;
  role: string;
  gender: 'female' | 'male';
  neuralVoiceId?: NeuralJapaneseVoiceId;
  detuneCents?: number;
  pitch: number;
  rate: number;
  samplePhrase: string;
}

export const CHARACTER_VOICES: CharacterVoiceProfile[] = [
  {
    id: 'mary',
    name: 'Mary',
    japaneseName: 'メアリー',
    avatar: '👱‍♀️',
    role: 'Voz femenina dulce y natural (Sakura / Mary)',
    gender: 'female',
    neuralVoiceId: 'jp_005',
    detuneCents: 0,
    pitch: 1.0,
    rate: 1.0,
    samplePhrase: 'こんにちは！メアリーです。よろしくお願いします！'
  },
  {
    id: 'takeshi',
    name: 'Takeshi',
    japaneseName: 'たけし',
    avatar: '👦',
    role: 'Voz masculina joven (Shuichiro)',
    gender: 'male',
    neuralVoiceId: 'jp_male_shuichiro',
    detuneCents: 0,
    pitch: 1.0,
    rate: 1.0,
    samplePhrase: 'やあ、ぼくはたけしです。いっしょに勉強しよう！'
  },
  {
    id: 'yamashita',
    name: 'Prof. Yamashita',
    japaneseName: '山下先生',
    avatar: '👨‍🏫',
    role: 'Voz masculina profunda (Osada)',
    gender: 'male',
    neuralVoiceId: 'jp_male_osada',
    detuneCents: 0,
    pitch: 1.0,
    rate: 1.0,
    samplePhrase: 'みなさん、こんにちは。今日も日本語をがんばりましょう。'
  },
  {
    id: 'michiko',
    name: 'Michiko',
    japaneseName: 'みちこ',
    avatar: '👩',
    role: 'Voz femenina cálida (Sakura)',
    gender: 'female',
    neuralVoiceId: 'jp_001',
    detuneCents: 0,
    pitch: 1.0,
    rate: 1.0,
    samplePhrase: 'はじめまして、みちこです。いいお天気ですね。'
  },
  {
    id: 'robert',
    name: 'Robert',
    japaneseName: 'ロバート',
    avatar: '👱‍♂️',
    role: 'Voz masculina animada (Matsudake)',
    gender: 'male',
    neuralVoiceId: 'jp_male_matsudake',
    detuneCents: 0,
    pitch: 1.0,
    rate: 1.0,
    samplePhrase: 'こんにちは、ロバートです。日本語がおもしろいです！'
  },
  {
    id: 'sora',
    name: 'Sora',
    japaneseName: 'ソラ',
    avatar: '👧',
    role: 'Voz femenina juvenil (Rei)',
    gender: 'female',
    neuralVoiceId: 'jp_female_rei',
    detuneCents: 0,
    pitch: 1.0,
    rate: 1.0,
    samplePhrase: 'こんにちは！ソラといっしょに楽しく練習しましょう！'
  },
  {
    id: 'ken',
    name: 'Ken',
    japaneseName: 'けん',
    avatar: '🧑',
    role: 'Voz masculina serena (Ichiro)',
    gender: 'male',
    neuralVoiceId: 'jp_006',
    detuneCents: 0,
    pitch: 1.0,
    rate: 1.0,
    samplePhrase: 'こんにちは、けんです。ゆっくり話しましょう。'
  },
  {
    id: 'sue',
    name: 'Sue',
    japaneseName: 'スー',
    avatar: '👩‍🦱',
    role: 'Voz femenina tranquila (Miho)',
    gender: 'female',
    neuralVoiceId: 'jp_001',
    detuneCents: 0,
    pitch: 1.0,
    rate: 1.0,
    samplePhrase: 'こんにちは、スーです。毎日少しずつ練習しています。'
  }
];

class SoundService {
  private audioCtx: AudioContext | null = null;
  private isEnabled: boolean = true;
  private defaultVoiceId: string = 'mary';
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private activeAudio: HTMLAudioElement | null = null;
  private activeBufferSource: AudioBufferSourceNode | null = null;
  private sequenceTimer: number | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private currentSpeechId: number = 0;
  private activeAbortController: AbortController | null = null;
  // In-memory caches for 0ms instantaneous replay
  private audioCache: Map<string, HTMLAudioElement> = new Map();
  private neuralBufferCache: Map<string, AudioBuffer> = new Map();

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

  private findSystemVoiceForCharacter(jaVoices: SpeechSynthesisVoice[], profile: CharacterVoiceProfile): SpeechSynthesisVoice | null {
    if (jaVoices.length === 0) return null;
    if (profile.id === 'mary' || jaVoices.length === 1) return jaVoices[0];

    const maleHints = ['ichiro', 'otoya', 'keita', 'takumi', 'daichi', 'naoki', 'hattori', 'male', '男'];
    const femaleHints = ['haruka', 'ayumi', 'nanami', 'kyoko', 'sayaka', 'mizuki', 'female', '女'];

    if (profile.gender === 'male') {
      const foundMale = jaVoices.find(v => maleHints.some(h => v.name.toLowerCase().includes(h)));
      if (foundMale) return foundMale;
      // Many browsers put the male Japanese voice at the second index
      return jaVoices[1] || jaVoices[0];
    } else {
      const foundFemale = jaVoices.find(v => femaleHints.some(h => v.name.toLowerCase().includes(h)));
      if (foundFemale) return foundFemale;
    }
    return jaVoices[0];
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

  private stopActivePlayback() {
    this.currentSpeechId++;
    if (this.activeAbortController) {
      try {
        this.activeAbortController.abort();
      } catch (_) {}
      this.activeAbortController = null;
    }
    if (this.activeBufferSource) {
      try {
        this.activeBufferSource.stop();
        this.activeBufferSource.disconnect();
      } catch (_) {}
      this.activeBufferSource = null;
    }
    if (this.activeAudio) {
      try {
        this.activeAudio.pause();
        this.activeAudio.currentTime = 0;
      } catch (_) {}
      this.activeAudio = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (_) {}
    }
  }

  public stopSpeech() {
    if (this.sequenceTimer) {
      window.clearTimeout(this.sequenceTimer);
      this.sequenceTimer = null;
    }
    this.stopActivePlayback();
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

  // Helper to split complex sentences and reading passages into natural spoken clauses
  private splitIntoSpeechChunks(text: string, maxLen: number = 80): string[] {
    const clean = text
      .replace(/\[.*?\]/g, '')
      .replace(/\(.*?\)/g, '')
      .replace(/（.*?）/g, '')
      .trim();
    if (!clean) return [];
    if (clean.length <= maxLen) return [clean];

    // Split by sentence punctuation first
    const rawParts = clean.split(/([。！？\n]+)/);
    const sentences: string[] = [];
    let temp = '';

    for (let i = 0; i < rawParts.length; i++) {
      temp += rawParts[i];
      if (i % 2 === 1 || i === rawParts.length - 1) {
        if (temp.trim()) {
          sentences.push(temp.trim());
        }
        temp = '';
      }
    }

    const finalChunks: string[] = [];
    for (const s of sentences) {
      if (s.length <= maxLen) {
        finalChunks.push(s);
      } else {
        // Split longer sentences by commas
        const subParts = s.split(/([、，,]+)/);
        let subTemp = '';
        for (let j = 0; j < subParts.length; j++) {
          subTemp += subParts[j];
          if (j % 2 === 1 || j === subParts.length - 1) {
            if (subTemp.trim()) finalChunks.push(subTemp.trim());
            subTemp = '';
          }
        }
        if (subTemp.trim()) finalChunks.push(subTemp.trim());
      }
    }

    return finalChunks.length > 0 ? finalChunks : [clean];
  }

  // Normalize phonetics for Japanese TTS engines (prevents morphological misreadings like 'はは' being parsed as topic particles 'wa-wa')
  private normalizeJapanesePhonetics(input: string): string {
    return input.replace(/(^|[^ぁ-んァ-ン一-龥])はは([^ぁ-んァ-ン一-龥]|$)/g, '$1ハハ$2');
  }

  // Play neural Japanese voice via unlocked Web Audio API with male formant warmth
  private async playNeuralCharacterVoice(
    text: string,
    rate: number,
    profile: CharacterVoiceProfile,
    speechId?: number
  ): Promise<boolean> {
    if (!profile.neuralVoiceId || text.length > 120) return false;
    if (speechId !== undefined && this.currentSpeechId !== speechId) return false;

    const ctx = this.getAudioContext();
    if (!ctx) return false;

    const cacheKey = `${profile.neuralVoiceId}:${text}`;
    try {
      let decodedBuffer = this.neuralBufferCache.get(cacheKey);

      if (!decodedBuffer) {
        let fetchedBase64: string | null = null;
        // Priority endpoints: direct modern ottsy domain with full CORS support + Vite dev server proxy
        const isLocalDev = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
        const endpoints = isLocalDev
          ? ['/api/tts', 'https://ottsy.weilbyte.dev/api/generation']
          : ['https://ottsy.weilbyte.dev/api/generation', '/api/tts'];

        const spokenPayload = this.normalizeJapanesePhonetics(text);

        for (const endpoint of endpoints) {
          if (speechId !== undefined && this.currentSpeechId !== speechId) return false;
          try {
            const controller = new AbortController();
            const timeoutId = window.setTimeout(() => controller.abort(), 4500);
            if (this.activeAbortController) {
              this.activeAbortController.signal.addEventListener('abort', () => controller.abort());
            }

            const res = await fetch(endpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                text: spokenPayload,
                voice: profile.neuralVoiceId
              }),
              signal: controller.signal
            });
            window.clearTimeout(timeoutId);

            if (res.ok) {
              const json = await res.json();
              if (json && json.success && json.data) {
                fetchedBase64 = json.data;
                break;
              }
            }
          } catch {
            // Continue to fallback endpoint
          }
        }

        if (!fetchedBase64) return false;
        if (speechId !== undefined && this.currentSpeechId !== speechId) return false;

        // Auto-cache into device IndexedDB storage for permanent offline availability!
        const offlineKey = getOfflineAudioKey(profile.id, text);
        audioStorage.saveBase64Audio(offlineKey, fetchedBase64, text, profile.id).catch(() => {});

        // Convert base64 MP3 to ArrayBuffer and decode with Web Audio API
        const binaryString = window.atob(fetchedBase64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }

        decodedBuffer = await ctx.decodeAudioData(bytes.buffer.slice(0));
        this.neuralBufferCache.set(cacheKey, decodedBuffer);
      }

      if (speechId !== undefined && this.currentSpeechId !== speechId) return false;

      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      this.stopActivePlayback();
      if (speechId !== undefined) {
        // Restore speechId for this active playback after stopping previous
        this.currentSpeechId = speechId;
      }

      return new Promise<boolean>((resolve) => {
        try {
          if (speechId !== undefined && this.currentSpeechId !== speechId) {
            return resolve(false);
          }
          const source = ctx.createBufferSource();
          const gainNode = ctx.createGain();
          source.buffer = decodedBuffer!;

          const baseScale = rate < 0.85 ? 0.70 : (rate / 0.9);
          source.playbackRate.value = Math.max(0.65, Math.min(1.2, profile.rate * baseScale));
          gainNode.gain.value = 0.95;

          source.connect(gainNode);

          gainNode.connect(ctx.destination);
          this.activeBufferSource = source;

          source.onended = () => {
            if (this.activeBufferSource === source) {
              this.activeBufferSource = null;
            }
            resolve(true);
          };

          source.start(0);
        } catch {
          resolve(false);
        }
      });
    } catch (err) {
      console.warn('Neural voice fallback notice:', err);
      return false;
    }
  }

  // Play audio stream from Google Translate or dictionary (supports complete complex sentences)
  private playOnlineChunk(text: string, rate: number = 0.9): Promise<boolean> {
    return new Promise((resolve) => {
      try {
        const clean = this.normalizeJapanesePhonetics(text.replace(/\[.*?\]/g, '').trim());
        if (!clean) return resolve(true);

        this.stopActivePlayback();

        const isShortWord = clean.length <= 10 && !/[\s、。！？]/.test(clean);
        const primaryUrl = isShortWord
          ? `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(clean)}&le=jap`
          : `https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&client=tw-ob&q=${encodeURIComponent(clean)}`;

        let audio = this.audioCache.get(clean);
        if (!audio) {
          audio = new Audio(primaryUrl);
          audio.preload = 'auto';
          this.audioCache.set(clean, audio);
        } else {
          audio.currentTime = 0;
        }

        this.activeAudio = audio;
        if ('preservesPitch' in audio) audio.preservesPitch = true;
        if ('webkitPreservesPitch' in audio) (audio as any).webkitPreservesPitch = true;
        if ('mozPreservesPitch' in audio) (audio as any).mozPreservesPitch = true;
        const effectiveRate = rate < 0.85 ? 0.70 : Math.min(1.2, rate);
        audio.defaultPlaybackRate = effectiveRate;
        audio.playbackRate = effectiveRate;
        audio.volume = 0.9;

        audio.onended = () => {
          if (this.activeAudio === audio) this.activeAudio = null;
          resolve(true);
        };

        audio.onerror = () => {
          // If primary failed, try the secondary fallback
          const fallbackUrl = isShortWord
            ? `https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&client=tw-ob&q=${encodeURIComponent(clean)}`
            : `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(clean)}&le=jap`;
          const fbAudio = new Audio(fallbackUrl);
          this.activeAudio = fbAudio;
          if ('preservesPitch' in fbAudio) (fbAudio as any).preservesPitch = true;
          const fbRate = rate < 0.85 ? 0.70 : Math.max(0.6, Math.min(1.25, rate));
          fbAudio.defaultPlaybackRate = fbRate;
          fbAudio.playbackRate = fbRate;
          fbAudio.volume = 0.9;
          fbAudio.onended = () => {
            if (this.activeAudio === fbAudio) this.activeAudio = null;
            resolve(true);
          };
          fbAudio.onerror = () => resolve(false);
          fbAudio.play().catch(() => resolve(false));
        };

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            // Only log if not an expected unsupported source fallback
            if (err && (err as { name?: string }).name !== 'NotSupportedError') {
              console.warn('Audio play notice:', err);
            }
            resolve(false);
          });
        }
      } catch (e) {
        console.warn('Online audio exception:', e);
        resolve(false);
      }
    });
  }

  public async playOnlineAudio(text: string, rate: number = 0.9): Promise<boolean> {
    const chunks = this.splitIntoSpeechChunks(text, 80);
    for (const chunk of chunks) {
      await this.playOnlineChunk(chunk, rate);
    }
    return true;
  }

  // Speak Japanese with genuine character voices (real male neural voice for men via WebAudio, original voice for Mary)
  // Play bundled local MP3 if available in the app package (100% offline)
  private playLocalBundledAudio(audioPath: string, rate: number = 1.0, speechId?: number): Promise<boolean> {
    return new Promise((resolve) => {
      try {
        if (speechId !== undefined && this.currentSpeechId !== speechId) {
          return resolve(false);
        }
        this.stopActivePlayback();
        if (speechId !== undefined) {
          this.currentSpeechId = speechId;
        }

        const cacheBustedPath = audioPath.startsWith('blob:')
          ? audioPath
          : (audioPath.includes('?') ? audioPath : `${audioPath}?v=sakura`);
        let audio = this.audioCache.get(cacheBustedPath);
        if (!audio) {
          audio = new Audio(cacheBustedPath);
          audio.preload = 'auto';
          this.audioCache.set(cacheBustedPath, audio);
        } else {
          audio.pause();
          audio.currentTime = 0;
        }

        this.activeAudio = audio;

        // 0.70x is the acoustic sweet spot: distinctly slower (~30%), clear and natural, without pitch shift
        const isSlow = rate < 0.85;
        const targetRate = isSlow ? 0.70 : 1.0;

        if ('preservesPitch' in audio) (audio as any).preservesPitch = true;
        if ('webkitPreservesPitch' in audio) (audio as any).webkitPreservesPitch = true;
        if ('mozPreservesPitch' in audio) (audio as any).mozPreservesPitch = true;

        audio.defaultPlaybackRate = targetRate;
        audio.playbackRate = targetRate;
        audio.volume = 0.95;

        audio.onplay = () => {
          audio.playbackRate = targetRate;
        };

        audio.onended = () => {
          if (this.activeAudio === audio) this.activeAudio = null;
          resolve(true);
        };

        audio.onerror = () => {
          resolve(false);
        };

        if (speechId !== undefined && this.currentSpeechId !== speechId) {
          return resolve(false);
        }

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => resolve(false));
        }
      } catch {
        resolve(false);
      }
    });
  }

  public async speakJapanese(text: string, rate: number = 0.9, speakerOrVoiceId?: string): Promise<void> {
    if (this.sequenceTimer) {
      window.clearTimeout(this.sequenceTimer);
      this.sequenceTimer = null;
    }

    // Strip square brackets [Furigana] and parentheses translations (e.g. "みます (veo)" -> "みます")
    const cleanText = text
      .replace(/\[.*?\]/g, '')
      .replace(/\(.*?\)/g, '')
      .replace(/（.*?）/g, '')
      .trim();
    if (!cleanText) return;

    this.getAudioContext();
    this.stopActivePlayback();

    const speechId = ++this.currentSpeechId;
    const abortController = new AbortController();
    this.activeAbortController = abortController;

    const charProfile = this.getCharacterProfile(speakerOrVoiceId);
    const isSlow = rate < 0.85;

    // 1. Direct offline match: if the character has a pre-rendered audio file in APK or device storage, play it!
    // (Works seamlessly for BOTH normal 1.0x and slow 🐢 0.70x with 100% voice fidelity)
    const slowRate = 0.70;
    const localFullKey = getOfflineAudioKey(charProfile.id, cleanText);
    let localFullPath = LOCAL_AUDIO_MANIFEST[localFullKey];
    if (!localFullPath) {
      const storedUrl = await audioStorage.getAudioUrl(localFullKey);
      if (storedUrl) localFullPath = storedUrl;
    }
    if (localFullPath) {
      const playedFullLocal = await this.playLocalBundledAudio(localFullPath, isSlow ? slowRate : 1.0, speechId);
      if (this.currentSpeechId !== speechId) return;
      if (playedFullLocal) return;
    }

    // In slow mode (turtle 🐢), split into natural spoken clauses (by 。、！？) with pauses between them
    const chunks = this.splitIntoSpeechChunks(cleanText, isSlow ? 32 : 75);

    for (let cIdx = 0; cIdx < chunks.length; cIdx++) {
      if (this.currentSpeechId !== speechId) return;
      const chunk = chunks[cIdx];
      let played = false;

      // Check bundled audio in APK or device storage for this specific character
      const localChunkKey = getOfflineAudioKey(charProfile.id, chunk);
      let localChunkPath = LOCAL_AUDIO_MANIFEST[localChunkKey];
      if (!localChunkPath) {
        const storedChunk = await audioStorage.getAudioUrl(localChunkKey);
        if (storedChunk) localChunkPath = storedChunk;
      }
      if (localChunkPath) {
        played = await this.playLocalBundledAudio(localChunkPath, isSlow ? slowRate : rate, speechId);
      }
      if (this.currentSpeechId !== speechId) return;

      // If chunk had no standalone file, try full text file if there's only 1 chunk
      if (!played && chunks.length === 1 && localFullPath) {
        played = await this.playLocalBundledAudio(localFullPath, isSlow ? slowRate : rate, speechId);
      }
      if (this.currentSpeechId !== speechId) return;

      // Fallback 1: Dedicated character neural voice (Takeshi, Yamashita, Michiko, etc.)
      if (!played && charProfile.neuralVoiceId) {
        played = await this.playNeuralCharacterVoice(chunk, isSlow ? slowRate : rate, charProfile, speechId);
      }
      if (this.currentSpeechId !== speechId) return;

      // Fallback 2: Browser/System SpeechSynthesis (matches character gender and tone)
      if (!played) {
        const jaVoices = this.getAvailableJapaneseVoices();
        const chosenVoice = this.findSystemVoiceForCharacter(jaVoices, charProfile);
        if (chosenVoice && typeof window !== 'undefined' && 'speechSynthesis' in window) {
          if (this.currentSpeechId !== speechId) return;
          played = await new Promise<boolean>((resolve) => {
            try {
              if (this.currentSpeechId !== speechId) return resolve(false);
              if (window.speechSynthesis.paused) {
                window.speechSynthesis.resume();
              }
              const spokenChunk = this.normalizeJapanesePhonetics(chunk);
              const utterance = new SpeechSynthesisUtterance(spokenChunk);
              this.activeUtterance = utterance;
              utterance.voice = chosenVoice;
              utterance.lang = chosenVoice.lang || 'ja-JP';
              utterance.rate = isSlow ? slowRate : Math.max(0.7, Math.min(1.25, rate * (charProfile.rate / 0.9)));
              utterance.pitch = charProfile.pitch;
              utterance.volume = 0.85;

              utterance.onend = () => {
                this.activeUtterance = null;
                resolve(true);
              };
              utterance.onerror = () => {
                this.activeUtterance = null;
                resolve(false);
              };
              window.speechSynthesis.speak(utterance);
            } catch {
              resolve(false);
            }
          });
        }
      }
      if (this.currentSpeechId !== speechId) return;

      // Fallback 3: Emergency offline audio (Mary fallback to avoid silence if device has no TTS)
      if (!played && charProfile.id !== 'mary') {
        const maryKey = getOfflineAudioKey('mary', chunk);
        let maryPath = LOCAL_AUDIO_MANIFEST[maryKey] || (chunks.length === 1 ? LOCAL_AUDIO_MANIFEST[getOfflineAudioKey('mary', cleanText)] : undefined);
        if (!maryPath) {
          const storedMary = await audioStorage.getAudioUrl(maryKey);
          if (storedMary) maryPath = storedMary;
        }
        if (maryPath) {
          played = await this.playLocalBundledAudio(maryPath, isSlow ? slowRate : rate, speechId);
        }
      }
      if (this.currentSpeechId !== speechId) return;

      // Fallback 3: Online dictionary
      if (!played) {
        await this.playOnlineChunk(chunk, isSlow ? slowRate : rate);
      }
      if (this.currentSpeechId !== speechId) return;

      // Natural pause between phrases in slow mode
      if (isSlow && cIdx < chunks.length - 1) {
        await new Promise((r) => window.setTimeout(r, 420));
      }
      if (this.currentSpeechId !== speechId) return;
    }
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

      const waitMs = Math.max(2800, line.audioText.length * (rate < 0.75 ? 310 : 210) + 900);
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
