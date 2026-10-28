# Genki Duo - Aplicación de Aprendizaje de Japonés (Ionic + React + SQLite)

Aplicación de aprendizaje de idioma japonés inspirada en las mecánicas de gamificación de **Duolingo** y estructurada siguiendo el libro de texto oficial **GENKI (3.ª Edición)** de The Japan Times, con persistencia local en **SQLite**.

---

## 🚀 Características Principales

1. **Currículo Genki (3.ª Edición)**:
   - **Unidad 0**: Fundamentos Kana (Hiragana & Katakana).
   - **Genki I (Lecciones 1 a 12)**: Saludos, estructura *X は Y です*, demostrativos *これ/それ/あれ*, horas, partículas (*は, を, で, に, へ, の, も*), verbos en presente educado (*〜ます / 〜ません*), existencia (*あります / います*), adjetivos (*い* y *な*), y la forma *Te (〜て)*.
   - **Genki II (Lecciones 13 a 23)**: Forma potencial (*〜できる*), volitivo (*〜よう*), condicionales (*〜たら*), y Keigo.

2. **Roadmap Interactivo Estilo Duolingo**:
   - Sendero serpenteante con botones 3D animados.
   - Nodos bloqueados y desbloqueados según el avance.
   - Puntuación por estrellas y coronas.
   - Sistema de corazones/vidas (❤️), racha de días (🔥), gemas (💎) y puntos de experiencia (⚡ XP).
   - Tipos de ejercicios:
     - Selección múltiple.
     - Banco de palabras (reordenar burbujas para construir oraciones).
     - Emparejamiento de pares (Kana/Kanji ↔ Significado/Sonido).
     - Ejercicios de escucha con síntesis de voz nativa japonesa (`ja-JP`).
     - Modales de retroalimentación inmediata (verde de acierto con explicación / rojo de corrección) y celebración con confeti.

3. **Módulo de Flashcards con Algoritmo SRS (Repetición Espaciada)**:
   - Categorías: **Kanas** (Hiragana y Katakana), **Vocabulario** (filtrado por lecciones de Genki), y **Frases clave**.
   - Animación de volteo 3D de la tarjeta con Kanji, Furigana, Romaji, traducción y oraciones de ejemplo.
   - Botón de audio para escuchar la pronunciación nativa.
   - Calificación SRS: *Repetir (1d)*, *Difícil (2d)*, *Bien (4d)*, *Fácil (7d)*.

4. **Tablas Interactivas de Kanas**:
   - Cuadrícula completa de los 46 sonidos básicos (Gojuon) y sonidos modificados con Dakuten (゛) y Handakuten (゜).
   - Audio instantáneo al pulsar cada caracter.

5. **Persistencia Local en SQLite**:
   - Integrado con `@capacitor-community/sqlite` y soporte para `jeep-sqlite`.
   - Tablas:
     - `user_profile`: XP, racha, corazones, gemas, sonido.
     - `lesson_progress`: Nodos desbloqueados, estrellas obtenidas, pasos completados.
     - `flashcard_srs`: Niveles de memorización, intervalos de días, próxima fecha de repaso.
     - `quiz_history`: Historial de intentos y puntajes.

---

## 🛠️ Tecnologías Utilizadas

- **Ionic React** (`@ionic/react`, `@ionic/react-router`)
- **React 18** + **TypeScript**
- **Vite** (Build ultra rápido)
- **Tailwind CSS** (Paleta de colores y componentes 3D Duolingo)
- **Capacitor SQLite** (`@capacitor-community/sqlite` + `jeep-sqlite`)
- **Web Audio API & Web Speech API** (Efectos de sonido y voz nativa en japonés)
- **Lucide React** & **Canvas Confetti**

---

## 📦 Comandos Disponibles

### Modo Desarrollo (Navegador Web)
```bash
npm run dev
```

### Compilar para Producción
```bash
npm run build
```

### Probar en Dispositivo Móvil (Android / iOS con Capacitor)
```bash
# Agregar plataformas nativas si se desea
npx cap add android
npx cap add ios

# Sincronizar compilación web con el proyecto nativo
npm run build
npx cap sync

# Abrir en Android Studio / Xcode
npx cap open android
npx cap open ios
```

