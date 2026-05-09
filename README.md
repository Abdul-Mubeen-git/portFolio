<div align="center">

<!-- Banner -->
```
██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝
```

### ❝ building things that matter »

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-000000?style=for-the-badge)](https://mubeen.dev)
[![GitHub Stars](https://img.shields.io/github/stars/mubeen/portfolio?style=for-the-badge&color=ff2d78)](https://github.com/mubeen/portfolio/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/mubeen/portfolio?style=for-the-badge&color=00f0ff)](https://github.com/mubeen/portfolio/commits/main)

</div>

---

## ✦ Overview

A personal portfolio built with **React + Vite**, featuring a terminal-style UI, animated orbs background, and a custom glitch effect on the hero heading. Designed to be fast, minimal, and memorable.

---

## ✦ Features

| Feature | Description |
|---|---|
| 🎨 **Glitch Hero** | Animated symbol toggle with RGB chromatic aberration slices — toggle, chaos & pulse modes |
| 💻 **Interactive Terminal** | Fake terminal component simulating shell output for a dev-centric aesthetic |
| 🔮 **Orbs Background** | Floating animated orbs that react to the page layout |
| ⚡ **Vite Powered** | Lightning-fast dev server and optimized production builds |
| 📱 **Responsive** | Fluid layout across all screen sizes |
| 🌑 **Dark by Default** | Deep dark theme with neon accents (`#ff2d78` pink / `#00f0ff` cyan) |

---

## ✦ Tech Stack

```
├── Framework     → React 18
├── Build Tool    → Vite
├── Styling       → Vanilla CSS (custom properties, keyframe animations)
├── Animations    → CSS clip-path, skewX, opacity transitions
├── Fonts         → Google Fonts (Syne / Space Grotesk)
└── Deployment    → (update soon..)
```

---

## ✦ Getting Started

### Prerequisites

- Node.js `>=18.x`
- npm or yarn

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/mubeen/portfolio.git

# 2. Move into the directory
cd portfolio

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

---

## ✦ Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── background/
│   │   │   └── Orbs.jsx          # Animated orb background
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── terminal/
│   │       └── Terminal.jsx      # Interactive terminal UI
│   ├── pages/
│   │   └── Home.jsx              # Hero + glitch effect
│   ├── styles/
│   │   └── globals.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## ✦ Glitch Effect

The hero heading uses a three-mode glitch system:

```jsx
// Modes: 'toggle' | 'chaos' | 'pulse' | 'stop'
const [mode, setMode]     = useState('chaos')
const [baseMs, setBaseMs] = useState(800)      // interval between triggers
const BURST_MS            = 120                // how long each glitch lasts
```

- **toggle** — `❝` and `»` swap every interval with RGB slice distortion
- **chaos** — random symbol state with probabilistic glitch bursts
- **pulse** — rhythmic sequence that builds and crashes
- **stop** — resets to default state, clears all active glitch classes

CSS drives the effect via `clip-path` + `skewX` keyframes on `::before` / `::after` pseudo-elements.

---

## ✦ Contact

<div align="center">

| Platform | Link |
|---|---|
| 🌐 Website | [mubeen.dev](https://mubeen.dev) |
| 💼 LinkedIn | [linkedin.com/in/mubeen](https://www.linkedin.com/in/dev-mubeen-abdul/) |
| 🐙 GitHub | [github.com/mubeen](https://github.com/Abdul-Mubeen-git) |
| 📧 Email | mubeenabdul1999@gmail.com |

</div>

---

<div align="center">

made with ❝ and » by **Mubeen**

⭐ Star this repo if you found it useful

</div>
