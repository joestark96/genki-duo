import React, { useState } from 'react';
import { Languages, Volume2, Search, Eye, EyeOff, ChevronDown, Sparkles, Wand2, BookOpen, Target } from 'lucide-react';
import { genkiVocabulary, VocabWord } from '../data/vocabularyData';
import { SpeechPracticeButton } from '../components/SpeechPracticeButton';
import { sound } from '../services/sound';
import { NavTab } from '../components/BottomNav';

interface VocabularyPageProps {
  showRomaji?: boolean;
  onNavigateTab?: (tab: NavTab) => void;
}

interface ConjugationRow {
  title: string;
  genkiRef: string;
  japanese: string;
  furigana: string;
  usage: string;
}

const godanMap: Record<
  string,
  { i: string; a: string; e: string; o: string; te: string; ta: string }
> = {
  う: { i: 'い', a: 'わ', e: 'え', o: 'お', te: 'って', ta: 'った' },
  つ: { i: 'ち', a: 'た', e: 'て', o: 'と', te: 'って', ta: 'った' },
  る: { i: 'り', a: 'ら', e: 'れ', o: 'ろ', te: 'って', ta: 'った' },
  む: { i: 'み', a: 'ま', e: 'め', o: 'も', te: 'んで', ta: 'んだ' },
  ぶ: { i: 'び', a: 'ば', e: 'べ', o: 'ぼ', te: 'んで', ta: 'んだ' },
  ぬ: { i: 'に', a: 'な', e: 'ね', o: 'の', te: 'んで', ta: 'んだ' },
  く: { i: 'き', a: 'か', e: 'け', o: 'こ', te: 'いて', ta: 'いた' },
  ぐ: { i: 'ぎ', a: 'が', e: 'げ', o: 'ご', te: 'いで', ta: 'いだ' },
  す: { i: 'し', a: 'さ', e: 'せ', o: 'そ', te: 'して', ta: 'した' }
};

function conjugateWord(word: VocabWord): ConjugationRow[] {
  const jp = word.japanese;
  const furi = word.furigana;

  if (word.pos === 'verb-irr') {
    if (jp.endsWith('する') || furi.endsWith('する')) {
      const stemJp = jp.slice(0, -2);
      const stemFuri = furi.slice(0, -2);
      return [
        { title: 'Forma Diccionario (辞書形)', genkiRef: 'Genki L3', japanese: `${stemJp}する`, furigana: `${stemFuri}する`, usage: 'Presente/futuro afirmativo informal' },
        { title: 'Cortés Afirmativo (ます形)', genkiRef: 'Genki L3', japanese: `${stemJp}します`, furigana: `${stemFuri}します`, usage: 'Presente/futuro formal' },
        { title: 'Cortés Negativo (ません)', genkiRef: 'Genki L3', japanese: `${stemJp}しません`, furigana: `${stemFuri}しません`, usage: 'Negativo formal' },
        { title: 'Cortés Pasado (ました)', genkiRef: 'Genki L4', japanese: `${stemJp}しました`, furigana: `${stemFuri}しました`, usage: 'Pasado formal' },
        { title: 'Forma Te (て形)', genkiRef: 'Genki L6', japanese: `${stemJp}して`, furigana: `${stemFuri}して`, usage: 'Peticiones (〜てください), progresivo (〜ている)' },
        { title: 'Corta Negativa (ない形)', genkiRef: 'Genki L8', japanese: `${stemJp}しない`, furigana: `${stemFuri}しない`, usage: 'Negativo informal / 〜ないでください' },
        { title: 'Corta Pasado (た形)', genkiRef: 'Genki L9', japanese: `${stemJp}した`, furigana: `${stemFuri}した`, usage: 'Pasado informal / experiencia (〜たことがある)' },
        { title: 'Deseo (〜たい)', genkiRef: 'Genki L11', japanese: `${stemJp}したい`, furigana: `${stemFuri}したい`, usage: 'Querer hacer la acción' },
        { title: 'Potencial (可能形)', genkiRef: 'Genki L13', japanese: `${stemJp}できる`, furigana: `${stemFuri}できる`, usage: 'Poder hacer / ser capaz de hacer' },
        { title: 'Volitivo (意向形)', genkiRef: 'Genki L15', japanese: `${stemJp}しよう`, furigana: `${stemFuri}しよう`, usage: '¡Hagamos! / Intención' },
        { title: 'Condicional 〜たら', genkiRef: 'Genki L17', japanese: `${stemJp}したら`, furigana: `${stemFuri}したら`, usage: 'Si / Cuando ocurre' },
        { title: 'Condicional 〜ば', genkiRef: 'Genki L22', japanese: `${stemJp}すれば`, furigana: `${stemFuri}すれば`, usage: 'Condición general' },
        { title: 'Voz Pasiva (受身形)', genkiRef: 'Genki L21', japanese: `${stemJp}される`, furigana: `${stemFuri}される`, usage: 'Ser hecho por alguien' },
        { title: 'Voz Causativa (使役形)', genkiRef: 'Genki L22', japanese: `${stemJp}させる`, furigana: `${stemFuri}させる`, usage: 'Hacer / dejar que alguien haga' }
      ];
    }
    // 来る (kuru) / 連れてくる / 持ってくる
    const prefixJp = jp.replace(/来る|くる$/, '');
    const prefixFuri = furi.replace(/くる$/, '');
    return [
      { title: 'Forma Diccionario (辞書形)', genkiRef: 'Genki L3', japanese: `${prefixJp}来る`, furigana: `${prefixFuri}くる`, usage: 'Presente/futuro informal' },
      { title: 'Cortés Afirmativo (ます形)', genkiRef: 'Genki L3', japanese: `${prefixJp}来ます`, furigana: `${prefixFuri}きます`, usage: 'Presente/futuro formal' },
      { title: 'Cortés Negativo (ません)', genkiRef: 'Genki L3', japanese: `${prefixJp}来ません`, furigana: `${prefixFuri}きません`, usage: 'Negativo formal' },
      { title: 'Cortés Pasado (ました)', genkiRef: 'Genki L4', japanese: `${prefixJp}来ました`, furigana: `${prefixFuri}きました`, usage: 'Pasado formal' },
      { title: 'Forma Te (て形)', genkiRef: 'Genki L6', japanese: `${prefixJp}来て`, furigana: `${prefixFuri}きて`, usage: 'Peticiones, secuencia, 〜ている' },
      { title: 'Corta Negativa (ない形)', genkiRef: 'Genki L8', japanese: `${prefixJp}来ない`, furigana: `${prefixFuri}こない`, usage: 'Negativo informal' },
      { title: 'Corta Pasado (た形)', genkiRef: 'Genki L9', japanese: `${prefixJp}来た`, furigana: `${prefixFuri}きた`, usage: 'Pasado informal' },
      { title: 'Deseo (〜たい)', genkiRef: 'Genki L11', japanese: `${prefixJp}来たい`, furigana: `${prefixFuri}きたい`, usage: 'Querer venir' },
      { title: 'Potencial (可能形)', genkiRef: 'Genki L13', japanese: `${prefixJp}来られる`, furigana: `${prefixFuri}こられる`, usage: 'Poder venir' },
      { title: 'Volitivo (意向形)', genkiRef: 'Genki L15', japanese: `${prefixJp}来よう`, furigana: `${prefixFuri}こよう`, usage: 'Intención' },
      { title: 'Condicional 〜たら', genkiRef: 'Genki L17', japanese: `${prefixJp}来たら`, furigana: `${prefixFuri}きたら`, usage: 'Si / cuando venga' },
      { title: 'Condicional 〜ば', genkiRef: 'Genki L22', japanese: `${prefixJp}来れば`, furigana: `${prefixFuri}くれば`, usage: 'Condición' },
      { title: 'Voz Pasiva (受身形)', genkiRef: 'Genki L21', japanese: `${prefixJp}来られる`, furigana: `${prefixFuri}こられる`, usage: 'Pasiva' },
      { title: 'Voz Causativa (使役形)', genkiRef: 'Genki L22', japanese: `${prefixJp}来させる`, furigana: `${prefixFuri}こさせる`, usage: 'Hacer venir' }
    ];
  }

  if (word.pos === 'verb-ru') {
    const stemJp = jp.slice(0, -1);
    const stemFuri = furi.slice(0, -1);
    return [
      { title: 'Forma Diccionario (辞書形)', genkiRef: 'Genki L3', japanese: jp, furigana: furi, usage: 'Presente/futuro informal' },
      { title: 'Cortés Afirmativo (ます形)', genkiRef: 'Genki L3', japanese: `${stemJp}ます`, furigana: `${stemFuri}ます`, usage: 'Presente/futuro formal' },
      { title: 'Cortés Negativo (ません)', genkiRef: 'Genki L3', japanese: `${stemJp}ません`, furigana: `${stemFuri}ません`, usage: 'Negativo formal' },
      { title: 'Cortés Pasado (ました)', genkiRef: 'Genki L4', japanese: `${stemJp}ました`, furigana: `${stemFuri}ました`, usage: 'Pasado formal' },
      { title: 'Forma Te (て形)', genkiRef: 'Genki L6', japanese: `${stemJp}て`, furigana: `${stemFuri}て`, usage: 'Peticiones (〜てください), progresivo (〜ている)' },
      { title: 'Corta Negativa (ない形)', genkiRef: 'Genki L8', japanese: `${stemJp}ない`, furigana: `${stemFuri}ない`, usage: 'Negativo informal' },
      { title: 'Corta Pasado (た形)', genkiRef: 'Genki L9', japanese: `${stemJp}た`, furigana: `${stemFuri}た`, usage: 'Pasado informal / experiencia' },
      { title: 'Deseo (〜たい)', genkiRef: 'Genki L11', japanese: `${stemJp}たい`, furigana: `${stemFuri}たい`, usage: 'Querer hacer' },
      { title: 'Potencial (可能形)', genkiRef: 'Genki L13', japanese: `${stemJp}られる`, furigana: `${stemFuri}られる`, usage: 'Poder hacer' },
      { title: 'Volitivo (意向形)', genkiRef: 'Genki L15', japanese: `${stemJp}よう`, furigana: `${stemFuri}よう`, usage: '¡Hagamos! / Vamos a...' },
      { title: 'Condicional 〜たら', genkiRef: 'Genki L17', japanese: `${stemJp}たら`, furigana: `${stemFuri}たら`, usage: 'Si / Cuando' },
      { title: 'Condicional 〜ば', genkiRef: 'Genki L22', japanese: `${stemJp}れば`, furigana: `${stemFuri}れば`, usage: 'Si (condición)' },
      { title: 'Voz Pasiva (受身形)', genkiRef: 'Genki L21', japanese: `${stemJp}られる`, furigana: `${stemFuri}られる`, usage: 'Ser hecho por otro' },
      { title: 'Voz Causativa (使役形)', genkiRef: 'Genki L22', japanese: `${stemJp}させる`, furigana: `${stemFuri}させる`, usage: 'Hacer / dejar hacer' }
    ];
  }

  if (word.pos === 'verb-u') {
    const lastChar = furi.slice(-1);
    const map = godanMap[lastChar] || godanMap['る'];
    const stemJp = jp.slice(0, -1);
    const stemFuri = furi.slice(0, -1);

    const isIku = jp.endsWith('行く') || furi.endsWith('いく');
    const teSuffix = isIku ? 'って' : map.te;
    const taSuffix = isIku ? 'った' : map.ta;

    // Special negative for ある -> ない
    const isAru = jp === 'ある' || jp.endsWith('がある');
    const naiJp = isAru ? jp.replace(/ある$/, 'ない') : `${stemJp}${map.a}ない`;
    const naiFuri = isAru ? furi.replace(/ある$/, 'ない') : `${stemFuri}${map.a}ない`;

    return [
      { title: 'Forma Diccionario (辞書形)', genkiRef: 'Genki L3', japanese: jp, furigana: furi, usage: 'Presente/futuro informal' },
      { title: 'Cortés Afirmativo (ます形)', genkiRef: 'Genki L3', japanese: `${stemJp}${map.i}ます`, furigana: `${stemFuri}${map.i}ます`, usage: 'Presente/futuro formal' },
      { title: 'Cortés Negativo (ません)', genkiRef: 'Genki L3', japanese: `${stemJp}${map.i}ません`, furigana: `${stemFuri}${map.i}ません`, usage: 'Negativo formal' },
      { title: 'Cortés Pasado (ました)', genkiRef: 'Genki L4', japanese: `${stemJp}${map.i}ました`, furigana: `${stemFuri}${map.i}ました`, usage: 'Pasado formal' },
      { title: 'Forma Te (て形)', genkiRef: 'Genki L6', japanese: `${stemJp}${teSuffix}`, furigana: `${stemFuri}${teSuffix}`, usage: 'Peticiones, secuencia, 〜ている' },
      { title: 'Corta Negativa (ない形)', genkiRef: 'Genki L8', japanese: naiJp, furigana: naiFuri, usage: 'Negativo informal' },
      { title: 'Corta Pasado (た形)', genkiRef: 'Genki L9', japanese: `${stemJp}${taSuffix}`, furigana: `${stemFuri}${taSuffix}`, usage: 'Pasado informal / 〜たことがある' },
      { title: 'Deseo (〜たい)', genkiRef: 'Genki L11', japanese: `${stemJp}${map.i}たい`, furigana: `${stemFuri}${map.i}たい`, usage: 'Querer hacer' },
      { title: 'Potencial (可能形)', genkiRef: 'Genki L13', japanese: `${stemJp}${map.e}る`, furigana: `${stemFuri}${map.e}る`, usage: 'Poder hacer' },
      { title: 'Volitivo (意向形)', genkiRef: 'Genki L15', japanese: `${stemJp}${map.o}う`, furigana: `${stemFuri}${map.o}う`, usage: '¡Hagamos! / Propuesta' },
      { title: 'Condicional 〜たら', genkiRef: 'Genki L17', japanese: `${stemJp}${taSuffix}ら`, furigana: `${stemFuri}${taSuffix}ら`, usage: 'Si / Cuando' },
      { title: 'Condicional 〜ば', genkiRef: 'Genki L22', japanese: `${stemJp}${map.e}ば`, furigana: `${stemFuri}${map.e}ば`, usage: 'Si (condición)' },
      { title: 'Voz Pasiva (受身形)', genkiRef: 'Genki L21', japanese: `${stemJp}${map.a}れる`, furigana: `${stemFuri}${map.a}れる`, usage: 'Ser hecho por alguien' },
      { title: 'Voz Causativa (使役形)', genkiRef: 'Genki L22', japanese: `${stemJp}${map.a}せる`, furigana: `${stemFuri}${map.a}せる`, usage: 'Hacer / dejar hacer' }
    ];
  }

  if (word.pos === 'adj-i') {
    const stemJp = jp.slice(0, -1);
    const stemFuri = furi.slice(0, -1);
    return [
      { title: 'Afirmativo Cortés', genkiRef: 'Genki L5', japanese: `${jp}です`, furigana: `${furi}です`, usage: 'Es [adjetivo]' },
      { title: 'Negativo Cortés', genkiRef: 'Genki L5', japanese: `${stemJp}くないです`, furigana: `${stemFuri}くないです`, usage: 'No es [adjetivo]' },
      { title: 'Pasado Afirmativo Cortés', genkiRef: 'Genki L5', japanese: `${stemJp}かったです`, furigana: `${stemFuri}かったです`, usage: 'Fue / Estuvo [adjetivo]' },
      { title: 'Pasado Negativo Cortés', genkiRef: 'Genki L5', japanese: `${stemJp}くなかったです`, furigana: `${stemFuri}くなかったです`, usage: 'No fue [adjetivo]' },
      { title: 'Forma Te (Conectar)', genkiRef: 'Genki L7', japanese: `${stemJp}くて`, furigana: `${stemFuri}くて`, usage: 'Y además (conectar adjetivos)' },
      { title: 'Forma Adverbial (〜く)', genkiRef: 'Genki L10', japanese: `${stemJp}く`, furigana: `${stemFuri}く`, usage: 'Modificar verbos / 〜くなる (volverse)' },
      { title: 'Apariencia (〜そうです)', genkiRef: 'Genki L13', japanese: `${stemJp}そうです`, furigana: `${stemFuri}そうです`, usage: 'Parece que es [adjetivo]' },
      { title: 'Condicional 〜かったら', genkiRef: 'Genki L17', japanese: `${stemJp}かったら`, furigana: `${stemFuri}かったら`, usage: 'Si es [adjetivo]' },
      { title: 'Condicional 〜ければ', genkiRef: 'Genki L22', japanese: `${stemJp}ければ`, furigana: `${stemFuri}ければ`, usage: 'Condición general' }
    ];
  }

  // adj-na
  return [
    { title: 'Afirmativo Cortés', genkiRef: 'Genki L5', japanese: `${jp}です`, furigana: `${furi}です`, usage: 'Es [adjetivo]' },
    { title: 'Negativo Cortés', genkiRef: 'Genki L5', japanese: `${jp}じゃないです`, furigana: `${furi}じゃないです`, usage: 'No es [adjetivo]' },
    { title: 'Pasado Afirmativo Cortés', genkiRef: 'Genki L5', japanese: `${jp}でした`, furigana: `${furi}でした`, usage: 'Fue / Estuvo [adjetivo]' },
    { title: 'Pasado Negativo Cortés', genkiRef: 'Genki L5', japanese: `${jp}じゃなかったです`, furigana: `${furi}じゃなかったです`, usage: 'No fue [adjetivo]' },
    { title: 'Modificador de Sustantivo (〜な)', genkiRef: 'Genki L5', japanese: `${jp}な＋名詞`, furigana: `${furi}な`, usage: 'Antes de un sustantivo' },
    { title: 'Forma Te (Conectar)', genkiRef: 'Genki L7', japanese: `${jp}で`, furigana: `${furi}で`, usage: 'Y además (conectar)' },
    { title: 'Forma Adverbial (〜に)', genkiRef: 'Genki L10', japanese: `${jp}になる`, furigana: `${furi}になる`, usage: 'Volverse / llegar a ser' },
    { title: 'Apariencia (〜そうです)', genkiRef: 'Genki L13', japanese: `${jp}そうです`, furigana: `${furi}そうです`, usage: 'Parece que es [adjetivo]' },
    { title: 'Condicional 〜だったら', genkiRef: 'Genki L17', japanese: `${jp}だったら`, furigana: `${furi}だったら`, usage: 'Si es [adjetivo]' }
  ];
}

export const VocabularyPage: React.FC<VocabularyPageProps> = ({ showRomaji = true, onNavigateTab }) => {
  const [viewMode, setViewMode] = useState<'vocab' | 'conjugator'>('vocab');
  const [selectedLesson, setSelectedLesson] = useState<number>(-1);
  const [selectedPos, setSelectedPos] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hideMeanings, setHideMeanings] = useState<boolean>(false);
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});

  // Conjugator state
  const conjugableWords = genkiVocabulary.filter(
    w => w.pos.startsWith('verb') || w.pos.startsWith('adj')
  );
  const [selectedConjWordId, setSelectedConjWordId] = useState<string>(conjugableWords[0]?.id || 'v3-2');
  const [conjFilterType, setConjFilterType] = useState<'all' | 'verb' | 'adj'>('all');

  const filteredConjWords = conjugableWords.filter(w => {
    if (conjFilterType === 'verb') return w.pos.startsWith('verb');
    if (conjFilterType === 'adj') return w.pos.startsWith('adj');
    return true;
  });

  const activeConjWord =
    conjugableWords.find(w => w.id === selectedConjWordId) || filteredConjWords[0] || conjugableWords[0];

  const toggleReveal = (id: string) => {
    sound.playTap();
    setRevealedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOpenInConjugator = (wordId: string) => {
    sound.playTap();
    setSelectedConjWordId(wordId);
    setConjFilterType('all');
    setViewMode('conjugator');
  };

  const filteredWords = genkiVocabulary.filter(word => {
    if (selectedLesson !== -1 && word.lesson !== selectedLesson) return false;
    if (selectedPos === 'noun' && word.pos !== 'noun') return false;
    if (selectedPos === 'verb' && !word.pos.startsWith('verb')) return false;
    if (selectedPos === 'adj' && !word.pos.startsWith('adj')) return false;
    if (selectedPos === 'expr' && word.pos !== 'expression' && word.pos !== 'adverb') return false;

    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;

    return (
      word.japanese.toLowerCase().includes(q) ||
      word.furigana.toLowerCase().includes(q) ||
      word.romaji.toLowerCase().includes(q) ||
      word.spanish.toLowerCase().includes(q)
    );
  });

  const getPosBadge = (pos: VocabWord['pos']) => {
    switch (pos) {
      case 'noun':
        return { label: 'Sustantivo', color: 'bg-blue-100 text-blue-700 border border-blue-200 dark:bg-blue-950/80 dark:text-blue-200 dark:border-blue-700/60' };
      case 'verb-u':
        return { label: 'Verbo U (五段)', color: 'bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/80 dark:text-emerald-200 dark:border-emerald-700/60' };
      case 'verb-ru':
        return { label: 'Verbo Ru (一段)', color: 'bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/80 dark:text-emerald-200 dark:border-emerald-700/60' };
      case 'verb-irr':
        return { label: 'Verbo Irreg.', color: 'bg-teal-100 text-teal-700 border border-teal-200 dark:bg-teal-950/80 dark:text-teal-200 dark:border-teal-700/60' };
      case 'adj-i':
        return { label: 'Adj. い', color: 'bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-950/80 dark:text-amber-200 dark:border-amber-700/60' };
      case 'adj-na':
        return { label: 'Adj. な', color: 'bg-orange-100 text-orange-700 border border-orange-200 dark:bg-orange-950/80 dark:text-orange-200 dark:border-orange-700/60' };
      case 'adverb':
        return { label: 'Adverbio', color: 'bg-purple-100 text-purple-700 border border-purple-200 dark:bg-purple-950/80 dark:text-purple-200 dark:border-purple-700/60' };
      default:
        return { label: 'Expresión', color: 'bg-rose-100 text-rose-700 border border-rose-200 dark:bg-rose-950/80 dark:text-rose-200 dark:border-rose-700/60' };
    }
  };

  return (
    <div className="max-w-md mx-auto w-full px-4 pt-4 pb-24 flex flex-col items-center animate-fade-in">
      {/* Mode Switcher: Vocabulario vs Conjugador Interactivo */}
      <div className="w-full flex bg-duo-gray-200 dark:bg-[#18272e] p-1 rounded-2xl mb-4 border border-transparent dark:border-[#283842]">
        <button
          onClick={() => {
            sound.playTap();
            setViewMode('vocab');
          }}
          className={`flex-1 py-2 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            viewMode === 'vocab'
              ? 'bg-white dark:bg-[#283842] text-rose-500 shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Lista de Vocabulario</span>
        </button>

        <button
          onClick={() => {
            sound.playTap();
            setViewMode('conjugator');
          }}
          className={`flex-1 py-2 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            viewMode === 'conjugator'
              ? 'bg-white dark:bg-[#283842] text-duo-purple shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          <Wand2 className="w-3.5 h-3.5" />
          <span>Conjugador</span>
        </button>

        {onNavigateTab && (
          <button
            onClick={() => {
              sound.playTap();
              onNavigateTab('mastery');
            }}
            className="flex-1 py-2 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white/50 dark:hover:bg-[#283842]/50"
          >
            <Target className="w-3.5 h-3.5" />
            <span>Mi Dominio</span>
          </button>
        )}
      </div>

      {/* ================================================= */}
      {/* VIEW 1: BANCO DE VOCABULARIO                      */}
      {/* ================================================= */}
      {viewMode === 'vocab' && (
        <>
          <div className="w-full flex items-center justify-between mb-4">
            <span className="text-xs font-black uppercase tracking-wider text-rose-500 flex items-center gap-1.5 bg-rose-50 dark:bg-rose-950/40 px-3 py-1 rounded-full border border-rose-300 dark:border-rose-800">
              <Languages className="w-3.5 h-3.5" /> Vocabulario Genki I y II
            </span>

            <button
              onClick={() => {
                sound.playTap();
                setHideMeanings(prev => !prev);
                setRevealedIds({});
              }}
              className={`px-3 py-1 rounded-full font-black text-xs flex items-center gap-1.5 transition-all cursor-pointer border-2 ${
                hideMeanings
                  ? 'bg-amber-100 dark:bg-amber-950/50 border-amber-400 text-amber-800 dark:text-amber-300'
                  : 'bg-white dark:bg-[#18272e] border-gray-200 dark:border-[#283842] text-gray-700 dark:text-gray-200 hover:border-rose-400'
              }`}
            >
              {hideMeanings ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{hideMeanings ? 'Modo Repaso Activo' : 'Ocultar Traducción'}</span>
            </button>
          </div>

          {/* Main Banner */}
          <div className="w-full p-5 rounded-3xl bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md mb-4 relative overflow-hidden">
            <div className="flex items-center justify-between mb-1.5">
              <span className="px-2.5 py-0.5 bg-black/25 text-white rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {selectedLesson === -1
                  ? 'Genki I & II Completo'
                  : selectedLesson === 0
                  ? 'Saludos Básicos'
                  : selectedLesson <= 12
                  ? `Genki I • Lección ${selectedLesson}`
                  : `Genki II • Lección ${selectedLesson}`}
              </span>
              <span className="text-xs font-black opacity-90">{filteredWords.length} palabras</span>
            </div>

            <h1 className="text-xl md:text-2xl font-black tracking-tight mb-1">Banco de Vocabulario</h1>
            <p className="text-xs font-bold opacity-90 leading-relaxed">
              Escucha la pronunciación, practica hablando con el micrófono o abre cualquier verbo/adjetivo en el Conjugador.
            </p>
          </div>

          {/* Lesson Selector */}
          <div className="w-full mb-3">
            <label className="block text-[11px] font-black uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-1.5 ml-1">
              Filtrar por Lección:
            </label>
            <div className="relative">
              <select
                value={selectedLesson}
                onChange={e => {
                  sound.playTap();
                  setSelectedLesson(Number(e.target.value));
                }}
                className="w-full appearance-none bg-white dark:bg-[#18272e] border-2 border-duo-gray-300 dark:border-[#283842] hover:border-rose-400 focus:border-rose-500 rounded-2xl py-3 px-4 pr-10 text-xs md:text-sm font-black text-gray-800 dark:text-gray-100 shadow-[0_4px_0_0_#e5e5e5] dark:shadow-none focus:outline-none transition-all cursor-pointer"
              >
                <option value={-1}>🌟 Todas las Lecciones (Genki I y II)</option>
                <option value={0}>Unidad 0: Saludos y Expresiones Básicas</option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map(num => (
                  <option key={num} value={num}>
                    📘 Genki I — Lección {num}
                  </option>
                ))}
                {Array.from({ length: 11 }, (_, i) => i + 13).map(num => (
                  <option key={num} value={num}>
                    📗 Genki II — Lección {num}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-500 dark:text-gray-400">
                <ChevronDown className="w-5 h-5 stroke-[2.5px]" />
              </div>
            </div>
          </div>

          {/* Search Input */}
          <div className="w-full relative mb-3">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscar palabra, kanji, romaji o español..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-2xl text-xs font-bold text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-rose-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* POS Filter Pills */}
          <div className="w-full flex gap-1.5 overflow-x-auto pb-1 mb-4">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'noun', label: 'Sustantivos' },
              { id: 'verb', label: 'Verbos' },
              { id: 'adj', label: 'Adjetivos' },
              { id: 'expr', label: 'Expresiones / Adverbios' }
            ].map(tab => {
              const isActive = selectedPos === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    sound.playTap();
                    setSelectedPos(tab.id);
                  }}
                  className={`px-3 py-1.5 rounded-xl font-bold text-[11px] transition-all border whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-rose-500 text-white font-black border-rose-600 shadow-sm'
                      : 'bg-gray-100 dark:bg-[#18272e] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-[#283842] hover:bg-gray-200 dark:hover:bg-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Word Cards List */}
          <div className="w-full flex flex-col gap-3">
            {filteredWords.length === 0 ? (
              <div className="p-8 text-center text-gray-400 font-bold text-sm bg-white dark:bg-[#18272e] border-2 border-dashed border-duo-gray-200 dark:border-[#283842] rounded-3xl">
                No se encontraron palabras con esos filtros.
              </div>
            ) : (
              filteredWords.map(word => {
                const badge = getPosBadge(word.pos);
                const isRevealed = revealedIds[word.id];
                const isHidden = hideMeanings && !isRevealed;
                const isConjugable = word.pos.startsWith('verb') || word.pos.startsWith('adj');

                return (
                  <article
                    key={word.id}
                    onClick={() => {
                      if (hideMeanings) toggleReveal(word.id);
                    }}
                    className={`w-full bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-2xl p-3.5 shadow-sm transition-all hover:border-rose-400/60 ${
                      hideMeanings ? 'cursor-pointer' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 mb-1">
                          <span className="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-gray-100 dark:bg-[#131f24] text-gray-600 dark:text-gray-200 border border-gray-200 dark:border-[#283842]">
                            {word.lesson === 0 ? 'Intro' : `L${word.lesson}`}
                          </span>
                          <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider ${badge.color}`}>
                            {badge.label}
                          </span>
                          {isConjugable && (
                            <button
                              type="button"
                              onClick={e => {
                                e.stopPropagation();
                                handleOpenInConjugator(word.id);
                              }}
                              className="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-purple-50 dark:bg-purple-950/80 text-duo-purple dark:text-purple-300 border border-purple-200 dark:border-purple-700/60 hover:bg-duo-purple hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                            >
                              <Wand2 className="w-2.5 h-2.5" />
                              <span>Conjugar</span>
                            </button>
                          )}
                        </div>

                        <div className="flex items-baseline gap-2">
                          <h3 className="text-xl font-black font-['Noto_Sans_JP'] text-gray-900 dark:text-gray-100 leading-tight">
                            {word.japanese}
                          </h3>
                          {word.japanese !== word.furigana && (
                            <span className="text-xs font-bold text-rose-500 font-['Noto_Sans_JP']">
                              【{word.furigana}】
                            </span>
                          )}
                        </div>

                        {showRomaji && (
                          <p className="text-[11px] font-semibold text-gray-400 dark:text-gray-400">
                            {word.romaji}
                          </p>
                        )}

                        <div className="mt-1">
                          {isHidden ? (
                            <div className="inline-block px-3 py-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 rounded-lg text-xs font-bold text-amber-800 dark:text-amber-300">
                              🙈 Toca para revelar significado
                            </div>
                          ) : (
                            <p className="text-sm font-bold text-gray-700 dark:text-gray-200">{word.spanish}</p>
                          )}
                        </div>

                        {word.exampleSentence && !isHidden && (
                          <div className="mt-2 pt-2 border-t border-gray-100 dark:border-[#283842] flex items-center justify-between gap-2">
                            <div className="text-xs">
                              <p className="font-bold text-gray-800 dark:text-gray-200 font-['Noto_Sans_JP']">
                                {word.exampleSentence}
                              </p>
                              {word.exampleTranslation && (
                                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                                  {word.exampleTranslation}
                                </p>
                              )}
                            </div>
                            <button
                              type="button"
                              onClick={e => {
                                e.stopPropagation();
                                sound.speakJapanese(word.exampleSentence!);
                              }}
                              className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-rose-500 hover:text-white text-gray-600 dark:text-gray-300 transition-colors flex-shrink-0"
                              title="Escuchar oración de ejemplo"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Audio + Speech Recognition Controls */}
                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={e => {
                              e.stopPropagation();
                              sound.speakJapanese(word.audioText || word.furigana, 0.9);
                            }}
                            className="p-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl shadow-[0_3px_0_0_#e11d48] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                            title="Escuchar pronunciación"
                          >
                            <Volume2 className="w-4 h-4 stroke-[2.5px]" />
                          </button>
                          <button
                            type="button"
                            onClick={e => {
                              e.stopPropagation();
                              sound.speakJapanese(word.audioText || word.furigana, 0.70);
                            }}
                            className="px-2 py-1.5 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-600 dark:text-rose-400 rounded-xl text-[11px] font-black cursor-pointer hover:brightness-105 transition-all"
                            title="Escuchar lento"
                          >
                            🐢
                          </button>
                        </div>

                        <SpeechPracticeButton
                          targetJapanese={word.japanese}
                          targetFurigana={word.furigana}
                          compact
                        />
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </>
      )}

      {/* ================================================= */}
      {/* VIEW 2: CONJUGADOR INTERACTIVO GENKI I & II       */}
      {/* ================================================= */}
      {viewMode === 'conjugator' && activeConjWord && (
        <div className="w-full flex flex-col items-center animate-fade-in">
          {/* Conjugator Banner */}
          <div className="w-full p-5 rounded-3xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="px-2.5 py-0.5 bg-black/25 text-white rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                <Wand2 className="w-3 h-3" /> Motor Gramatical Genki I y II
              </span>
              <span className="text-xs font-black opacity-90">{conjugableWords.length} verbos y adjetivos</span>
            </div>
            <h2 className="text-xl font-black tracking-tight mb-1">Conjugador Interactivo</h2>
            <p className="text-xs font-bold opacity-90">
              Selecciona cualquier verbo o adjetivo para generar sus 14 conjugaciones oficiales con audio y práctica de voz.
            </p>
          </div>

          {/* Filter Pills: Todos vs Verbos vs Adjetivos */}
          <div className="w-full flex gap-2 mb-3">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'verb', label: 'Solo Verbos (動詞)' },
              { id: 'adj', label: 'Solo Adjetivos (形容詞)' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => {
                  sound.playTap();
                  const nextType = f.id as 'all' | 'verb' | 'adj';
                  setConjFilterType(nextType);
                  const list = conjugableWords.filter(w =>
                    nextType === 'verb'
                      ? w.pos.startsWith('verb')
                      : nextType === 'adj'
                      ? w.pos.startsWith('adj')
                      : true
                  );
                  if (list.length > 0) setSelectedConjWordId(list[0].id);
                }}
                className={`px-3 py-1.5 rounded-xl font-bold text-xs border transition-all cursor-pointer ${
                  conjFilterType === f.id
                    ? 'bg-purple-600 text-white font-black border-purple-700 shadow-sm'
                    : 'bg-white dark:bg-[#18272e] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-[#283842]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Word Selector Dropdown */}
          <div className="w-full mb-4">
            <div className="relative">
              <select
                value={activeConjWord.id}
                onChange={e => {
                  sound.playTap();
                  setSelectedConjWordId(e.target.value);
                }}
                className="w-full appearance-none bg-white dark:bg-[#18272e] border-2 border-purple-300 dark:border-[#283842] focus:border-purple-500 rounded-2xl py-3 px-4 pr-10 text-xs md:text-sm font-black text-gray-800 dark:text-gray-100 shadow-sm focus:outline-none cursor-pointer"
              >
                {filteredConjWords.map(w => (
                  <option key={w.id} value={w.id}>
                    [L{w.lesson}] {w.japanese} ({w.furigana}) — {w.spanish}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-500">
                <ChevronDown className="w-5 h-5 stroke-[2.5px]" />
              </div>
            </div>
          </div>

          {/* Selected Word Hero Summary */}
          <div className="w-full bg-white dark:bg-[#18272e] border-2 border-purple-200 dark:border-[#283842] rounded-2xl p-4 mb-4 flex items-center justify-between">
            <div>
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${getPosBadge(activeConjWord.pos).color}`}>
                {getPosBadge(activeConjWord.pos).label} • Lección {activeConjWord.lesson}
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <h3 className="text-2xl font-black font-['Noto_Sans_JP'] text-gray-900 dark:text-white">
                  {activeConjWord.japanese}
                </h3>
                <span className="text-sm font-bold text-purple-600 dark:text-purple-400 font-['Noto_Sans_JP']">
                  【{activeConjWord.furigana}】
                </span>
              </div>
              <p className="text-xs font-bold text-gray-600 dark:text-gray-300 mt-0.5">
                {activeConjWord.spanish}
              </p>
            </div>

            <button
              onClick={() => sound.speakJapanese(activeConjWord.furigana)}
              className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl shadow-sm cursor-pointer"
              title="Escuchar forma base"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>

          {/* Conjugations List */}
          <div className="w-full flex flex-col gap-2.5">
            {conjugateWord(activeConjWord).map((row, idx) => (
              <div
                key={idx}
                className="w-full bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-2xl p-3 flex items-center justify-between gap-3 hover:border-purple-400/60 transition-all"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] font-black uppercase tracking-wide text-purple-600 dark:text-purple-400">
                      {row.title}
                    </span>
                    <span className="px-1.5 py-0.2 rounded bg-gray-100 dark:bg-gray-800 text-[9px] font-bold text-gray-500">
                      {row.genkiRef}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-black font-['Noto_Sans_JP'] text-gray-900 dark:text-gray-100">
                      {row.japanese}
                    </span>
                    {row.japanese !== row.furigana && (
                      <span className="text-xs font-bold text-gray-400 font-['Noto_Sans_JP']">
                        ({row.furigana})
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
                    {row.usage}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <SpeechPracticeButton
                    targetJapanese={row.japanese}
                    targetFurigana={row.furigana}
                    compact
                  />
                  <button
                    onClick={() => sound.speakJapanese(row.furigana, 0.9)}
                    className="p-2 bg-purple-100 dark:bg-purple-900/40 hover:bg-purple-600 text-purple-700 dark:text-purple-300 hover:text-white rounded-xl transition-colors cursor-pointer"
                    title="Escuchar forma conjugada"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
