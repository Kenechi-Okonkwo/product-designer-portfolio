// Import React — required in every file that uses JSX syntax
import React from 'react'

// Import ReactDOM's createRoot — the modern API for mounting React apps (React 18+)
import ReactDOM from 'react-dom/client'

// ── VERSION SWITCHER ────────────────────────────────────────────────────────
// Uncomment ONE of the lines below to switch between design iterations.
// Save the file — Vite hot-reloads instantly.

import App from './AppV1.jsx'   // V1 — Purple dark, card-based grid (original)
// import App from './AppV2.jsx' // V2 — Neo-Tech Blue, glassmorphism, bento grid
// import App from './AppV3.jsx' // V3 — Editorial Amber, flat lines, numbered list
// ─────────────────────────────────────────────────────────────────────────────

// Import global styles (Tailwind directives + custom CSS variables)
import './index.css'

// Find the #root div in index.html and create a React root on it
// createRoot enables concurrent features introduced in React 18
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode — runs extra checks and warnings during development only (no effect in production)
  <React.StrictMode>
    {/* Render the App component into the DOM */}
    <App />
  </React.StrictMode>,
)
