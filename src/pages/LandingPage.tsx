import React, { useState } from 'react';
import {
  Download,
  Play,
  Sparkles,
  BookOpen,
  Mic,
  Trophy,
  Heart,
  Star,
  CheckCircle2,
  Github,
  ArrowRight,
  ExternalLink,
  HardDrive,
  Smartphone,
  Globe,
  Layers,
  Flame,
  Check,
  Languages,
  PenTool
} from 'lucide-react';

interface LandingPageProps {
  onEnterApp: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp }) => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const APK_DOWNLOAD_URL = 'https://github.com/joestark96/genki-duo/raw/main/releases/nihongo-v1.1.apk';

  const handleDownloadApk = () => {
    setDownloadStarted(true);
    // 1. Direct GitHub release raw URL download
    const link = document.createElement('a');
    link.href = APK_DOWNLOAD_URL;
    link.setAttribute('download', 'nihongo-v1.1.apk');
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. Direct browser navigation fallback for mobile Chrome/Android
    setTimeout(() => {
      window.location.href = APK_DOWNLOAD_URL;
    }, 300);

    setTimeout(() => setDownloadStarted(false), 4500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#0f171c] dark:via-[#131f24] dark:to-[#0b1114] text-gray-800 dark:text-gray-100 font-['Nunito',sans-serif] selection:bg-duo-green selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-[#131f24]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#283842] transition-colors">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-2xl bg-duo-green flex items-center justify-center text-white font-black text-xl shadow-[0_3px_0_0_#46a302]">
              日
            </div>
            <div>
              <div className="font-black text-lg leading-tight tracking-tight flex items-center gap-1.5">
                <span>NihonGo!</span>
                <span className="text-[10px] uppercase font-black px-1.5 py-0.5 rounded-md bg-duo-green/15 text-duo-green">v1.1</span>
              </div>
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 leading-none">日本語 • Genki I & II</p>
            </div>
          </div>

          {/* Nav Links & Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://github.com/joestark96/genki-duo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl border border-gray-200 dark:border-[#283842] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-black text-xs flex items-center gap-1.5 transition-colors"
              title="Ver repositorio en GitHub"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <button
              onClick={handleDownloadApk}
              className="px-3.5 py-2 rounded-xl bg-duo-blue hover:bg-duo-blue-dark text-white font-black text-xs shadow-[0_3px_0_0_#1899d6] active:translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar APK</span>
            </button>

            <button
              onClick={onEnterApp}
              className="px-4 py-2 rounded-xl bg-duo-green hover:bg-duo-green-dark text-white font-black text-xs shadow-[0_3px_0_0_#46a302] active:translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span className="hidden xs:inline">Probar Web</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 px-4">
        {/* Decorative background blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-duo-green/10 dark:bg-duo-green/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-duo-blue/10 dark:bg-duo-blue/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-duo-green/15 border border-duo-green/30 text-duo-green dark:text-green-400 font-black text-xs mb-6 animate-fade-in shadow-xs">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Versión 1.1 Oficial Disponible para Android y Web</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] max-w-4xl text-gray-900 dark:text-white mb-6">
            Aprende <span className="text-duo-green">Japonés Real</span> con el rigor de Genki y la adicción de Duolingo
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg font-bold text-gray-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed">
            Domina las <strong>23 unidades completas de Genki I y II</strong>: Hiragana, Katakana, Kanjis N5/N4, nuevo examen de saltos multilección, laboratorio de voz con IA, sistema SRS de dominio de palabras y modo 100% offline.
          </p>

          {/* Main Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-md mb-12">
            <button
              onClick={handleDownloadApk}
              className="flex-1 min-w-[200px] py-4 px-6 rounded-2xl bg-duo-green hover:bg-duo-green-dark text-white font-black text-sm uppercase tracking-wider shadow-[0_5px_0_0_#46a302] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Download className="w-5 h-5 stroke-[2.5px] group-hover:translate-y-0.5 transition-transform" />
              <span>{downloadStarted ? 'Descargando...' : 'Descargar APK v1.1'}</span>
            </button>

            <button
              onClick={onEnterApp}
              className="flex-1 min-w-[200px] py-4 px-6 rounded-2xl bg-white dark:bg-[#18272e] border-2 border-duo-blue text-duo-blue hover:bg-duo-blue hover:text-white font-black text-sm uppercase tracking-wider shadow-[0_5px_0_0_#1899d6] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Probar App Web</span>
            </button>
          </div>

          {/* Highlights Mini Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1 bg-white dark:bg-[#18272e] border border-gray-200 dark:border-[#283842] px-3 py-1 rounded-xl">
              <Check className="w-3.5 h-3.5 text-duo-green stroke-[3px]" /> 100% Gratuito y Open Source
            </span>
            <span className="flex items-center gap-1 bg-white dark:bg-[#18272e] border border-gray-200 dark:border-[#283842] px-3 py-1 rounded-xl">
              <Check className="w-3.5 h-3.5 text-duo-green stroke-[3px]" /> Sin Anuncios Invasivos
            </span>
            <span className="flex items-center gap-1 bg-white dark:bg-[#18272e] border border-gray-200 dark:border-[#283842] px-3 py-1 rounded-xl">
              <Check className="w-3.5 h-3.5 text-duo-green stroke-[3px]" /> Funciona 100% Offline
            </span>
          </div>

          {/* Interactive Mockup Preview Card */}
          <div className="w-full max-w-3xl mt-12 p-3 sm:p-5 rounded-3xl bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] shadow-2xl relative">
            {/* Top Device Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-[#283842] mb-4 text-xs font-black">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2 text-gray-400">nihongo.app</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1 text-rose-500"><Heart className="w-3.5 h-3.5 fill-rose-500" /> 5</span>
                <span className="flex items-center gap-1 text-amber-500"><Flame className="w-3.5 h-3.5 fill-amber-500" /> 14</span>
                <span className="flex items-center gap-1 text-duo-blue"><Trophy className="w-3.5 h-3.5 text-duo-blue" /> 320 XP</span>
              </div>
            </div>

            {/* Mock Serpentine Roadmap */}
            <div className="bg-gray-50 dark:bg-[#131f24] rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="text-center mb-6">
                <span className="px-3 py-1 rounded-xl bg-duo-green/20 text-duo-green font-black text-xs uppercase tracking-wider">
                  Unidad 1 • Diálogos y Presentaciones
                </span>
                <h3 className="text-lg font-black mt-1">あいさつと自己紹介 (Genki I)</h3>
              </div>

              {/* Sample Nodes */}
              <div className="flex flex-col items-center gap-4 relative w-full max-w-xs">
                {/* Node 1: Completed */}
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-duo-yellow border-b-4 border-duo-yellow-dark flex items-center justify-center text-white shadow-lg">
                    <Star className="w-8 h-8 fill-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-black">Lección 1: Saludos</p>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">✓ 3/3 Estrellas</span>
                  </div>
                </div>

                {/* Node 2: Active with bouncing badge */}
                <div className="flex items-center gap-3 relative">
                  <div className="absolute -top-7 left-3 animate-bounce">
                    <span className="px-2 py-0.5 rounded-lg bg-duo-green text-white font-black text-[10px] shadow-sm uppercase tracking-wide">
                      ¡Comenzar!
                    </span>
                  </div>
                  <div className="w-18 h-18 rounded-full bg-duo-green border-b-4 border-duo-green-dark flex items-center justify-center text-white shadow-xl ring-4 ring-duo-green/30 animate-pulse">
                    <Play className="w-8 h-8 fill-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-black">Lección 2: La Hora y Números</p>
                    <span className="text-[10px] text-duo-blue font-bold">Disponible ahora</span>
                  </div>
                </div>

                {/* Node 3: Locked */}
                <div className="flex items-center gap-3 opacity-60">
                  <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 border-b-4 border-gray-400 dark:border-gray-800 flex items-center justify-center text-gray-500">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-black text-gray-400">Lección 3: Ocupaciones</p>
                    <span className="text-[10px] text-gray-400 font-medium">Bloqueado</span>
                  </div>
                </div>
              </div>

              {/* Try it out overlay button */}
              <div className="mt-8">
                <button
                  onClick={onEnterApp}
                  className="px-6 py-2.5 rounded-xl bg-duo-green hover:bg-duo-green-dark text-white font-black text-xs shadow-[0_3px_0_0_#46a302] active:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explorar Todo el Roadmap Interactivo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-white dark:bg-[#18272e] border-y border-gray-200 dark:border-[#283842] py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-duo-green">23</span>
            <span className="text-xs font-black uppercase text-gray-400 mt-1">Unidades de Genki I y II</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-duo-blue">850+</span>
            <span className="text-xs font-black uppercase text-gray-400 mt-1">Palabras y Kanjis SRS</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-purple-600 dark:text-purple-400">40+</span>
            <span className="text-xs font-black uppercase text-gray-400 mt-1">Diálogos de Roleplay IA</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-amber-500">100%</span>
            <span className="text-xs font-black uppercase text-gray-400 mt-1">Offline y Gratuito</span>
          </div>
        </div>
      </section>

      {/* 6 Key Superpowers / Features */}
      <section className="py-16 sm:py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-wider text-duo-green">Todo en una sola aplicación</span>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 dark:text-white mt-1 mb-4">
            Diseñado para que hables, leas y domines japonés de verdad
          </h2>
          <p className="text-sm sm:text-base font-bold text-gray-500 dark:text-gray-400">
            Sin suscripciones ocultas ni muros de pago. El currículum más respetado del mundo ahora completamente gamificado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-duo-green flex items-center justify-center font-black">
              <Layers className="w-6 h-6 stroke-[2.5px]" />
            </div>
            <h3 className="text-base font-black text-gray-900 dark:text-white">Roadmap Completo de Genki I y II</h3>
            <p className="text-xs font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
              23 unidades interactivas que cubren desde los primeros saludos hasta gramática intermedia avanzada con exámenes de salto de nivel y repaso por unidad.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black">
              <Mic className="w-6 h-6 stroke-[2.5px]" />
            </div>
            <h3 className="text-base font-black text-gray-900 dark:text-white">Laboratorio de Voz y Roleplay con IA</h3>
            <p className="text-xs font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
              Habla japonés en conversaciones reales. El sistema normaliza números, horas y kanji para una calificación fonética justa y avance automático de diálogos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-duo-blue flex items-center justify-center font-black">
              <Trophy className="w-6 h-6 stroke-[2.5px]" />
            </div>
            <h3 className="text-base font-black text-gray-900 dark:text-white">Banco de Dominio y Repaso SRS</h3>
            <p className="text-xs font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
              Algoritmo de repetición espaciada en 5 niveles (⚪ Desconocida, 🔴 Débil, 🟡 Aprendiendo, 🟢 Familiar, 💎 Dominada) con filtro exclusivo de lecciones vistas.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center font-black">
              <HardDrive className="w-6 h-6 stroke-[2.5px]" />
            </div>
            <h3 className="text-base font-black text-gray-900 dark:text-white">100% Offline y Descarga en Segundo Plano</h3>
            <p className="text-xs font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
              Descarga paquetes de voz neuronal por unidad. El gestor en segundo plano continúa descargando aunque cambies de pestaña o apagues la pantalla.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
            <div className="w-12 h-12 rounded-2xl bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center font-black">
              <PenTool className="w-6 h-6 stroke-[2.5px]" />
            </div>
            <h3 className="text-base font-black text-gray-900 dark:text-white">Taller de Escritura y Trazos</h3>
            <p className="text-xs font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
              Lienzo digital interactivo para practicar Hiragana, Katakana y Kanjis oficiales del JLPT N5 y N4 siguiendo el orden exacto de los trazos.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center font-black">
              <BookOpen className="w-6 h-6 stroke-[2.5px]" />
            </div>
            <h3 className="text-base font-black text-gray-900 dark:text-white">Guía Completa de Teoría y Gramática</h3>
            <p className="text-xs font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
              Acceso instantáneo a explicaciones gramaticales detalladas en español para cada tema antes o después de cada lección del roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* APK v1.0 Production Download Section */}
      <section id="download-apk" className="py-16 px-4 bg-gradient-to-b from-gray-100 to-white dark:from-[#0b1114] dark:to-[#131f24] border-t border-gray-200 dark:border-[#283842]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-[#18272e] rounded-3xl p-6 sm:p-10 border-2 border-duo-green shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <span className="px-3 py-1 rounded-xl bg-duo-green/20 text-duo-green font-black text-xs uppercase tracking-wider">
                Compilado Oficial para Android
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mt-2 mb-2">
                NihonGo! v1.1 (APK Release)
              </h2>
              <p className="text-xs sm:text-sm font-bold text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Descarga el archivo APK de producción directamente a tu dispositivo móvil. Compatible con teléfonos y tablets Android 8.0 en adelante.
              </p>

              {/* APK Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 mb-6">
                <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-[#131f24] border border-gray-200 dark:border-[#283842]">
                  <span className="block text-[10px] text-gray-400 uppercase">Versión</span>
                  <span className="text-gray-800 dark:text-gray-100 font-black">1.1 (Release)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-[#131f24] border border-gray-200 dark:border-[#283842]">
                  <span className="block text-[10px] text-gray-400 uppercase">Tamaño</span>
                  <span className="text-gray-800 dark:text-gray-100 font-black">~16.1 MB</span>
                </div>
                <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-[#131f24] border border-gray-200 dark:border-[#283842] col-span-2 sm:col-span-1">
                  <span className="block text-[10px] text-gray-400 uppercase">Requisitos</span>
                  <span className="text-gray-800 dark:text-gray-100 font-black">Android 8.0+</span>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleDownloadApk}
                  className="py-3.5 px-6 rounded-2xl bg-duo-green hover:bg-duo-green-dark text-white font-black text-sm uppercase tracking-wider shadow-[0_4px_0_0_#46a302] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-5 h-5 stroke-[2.5px]" />
                  <span>{downloadStarted ? 'Descargando APK...' : 'Descargar APK v1.1'}</span>
                </button>

                <a
                  href="https://github.com/joestark96/genki-duo/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-5 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-black text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-4 h-4" />
                  <span>Releases en GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Direct fallback link */}
              <div className="mt-3">
                <a
                  href={APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-duo-green dark:text-green-400 hover:underline flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>¿No inició automáticamente? Clic aquí para descarga directa inmediata (16 MB)</span>
                </a>
              </div>
            </div>

            {/* Android Icon / Illustration */}
            <div className="w-40 h-40 rounded-3xl bg-gradient-to-tr from-emerald-500 to-duo-green flex items-center justify-center text-white shadow-xl flex-shrink-0">
              <Smartphone className="w-20 h-20 stroke-[1.5px]" />
            </div>
          </div>

          {/* Quick Install Guide */}
          <div className="mt-8 p-6 rounded-3xl bg-gray-50 dark:bg-[#131f24] border border-gray-200 dark:border-[#283842]">
            <h4 className="text-sm font-black uppercase text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span>📱 Guía de Instalación Rápida en Android</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-gray-600 dark:text-gray-400">
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-duo-green text-white font-black flex items-center justify-center flex-shrink-0">1</span>
                <p>Descarga el archivo <strong>nihongo-v1.1.apk</strong> presionando el botón verde.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-duo-green text-white font-black flex items-center justify-center flex-shrink-0">2</span>
                <p>Abre el archivo descargado. Si Android lo solicita, activa <em>Permitir desde esta fuente</em>.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-duo-green text-white font-black flex items-center justify-center flex-shrink-0">3</span>
                <p>Toca en <strong>Instalar</strong>, abre la aplicación y ¡comienza a aprender japonés gratis!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Version Alternative Banner */}
      <section className="py-14 px-4 bg-duo-blue text-white text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <Globe className="w-12 h-12 stroke-[2px] mb-3 text-white/90" />
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            ¿Quieres probarla ahora mismo en tu navegador?
          </h2>
          <p className="text-xs sm:text-sm font-bold text-white/90 max-w-xl mb-6">
            NihonGo! cuenta con una versión web 100% interactiva que corre directamente en Chrome, Safari, Firefox o Edge sin necesidad de instalar nada.
          </p>
          <button
            onClick={onEnterApp}
            className="py-3.5 px-8 rounded-2xl bg-white text-duo-blue hover:bg-gray-100 font-black text-sm uppercase tracking-wider shadow-lg active:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-duo-blue" />
            <span>Abrir NihonGo! en el Navegador</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#131f24] border-t border-gray-200 dark:border-[#283842] py-10 px-4 text-xs font-semibold text-gray-500 dark:text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-black text-gray-800 dark:text-gray-100">NihonGo! (日本語) • Versión 1.1</p>
            <p className="text-[11px] text-gray-400 mt-0.5">
              Basado en el currículum de <em>GENKI: An Integrated Course in Elementary Japanese</em> (The Japan Times).
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onEnterApp}
              className="text-duo-green hover:underline font-black cursor-pointer"
            >
              Versión Web
            </button>
            <button
              onClick={handleDownloadApk}
              className="text-duo-blue hover:underline font-black cursor-pointer"
            >
              Descargar APK
            </button>
            <a
              href="https://github.com/joestark96/genki-duo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 font-black"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
