# IISPPR Academy — Premium Redesign v2

> **Internship Assignment** — Full redesign of iisppracademy.com
> Dark luxury ed-tech aesthetic. Jaw-dropping, eye-catching, professional.

---

## 🚀 Run in 3 Steps

```bash
# 1. Open folder in VS Code
# 2. Open terminal  (Ctrl + `)

npm install
npm run dev
# → http://localhost:5173
```

> Node.js 18+ required.

---

## 📁 Project Structure

```
iisppr-v2/
├── index.html                   ← Font imports (Plus Jakarta Sans, DM Sans, DM Mono)
├── package.json
├── vite.config.js
├── tailwind.config.js           ← Design tokens
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx                  ← Page layout
    ├── index.css                ← Global dark theme, animations, utility classes
    └── components/
        ├── Cursor.jsx           ← Custom green cursor with lag ring
        ├── Navbar.jsx           ← Transparent → frosted glass on scroll
        ├── HeroSection.jsx      ← SECTION 1: Hero banner redesign
        ├── ProgrammesSection.jsx← SECTION 2: Duration/Dates/Timings + Class cards
        ├── AboutSection.jsx     ← About the Course redesign
        └── Footer.jsx
```

---

## 🎨 Design System

### Theme: Dark Luxury EdTech
Inspired by Linear, Vercel, and Framer — deep dark navy base, emerald green primary, gold accent.

### Colors
| Token | Value | Usage |
|---|---|---|
| `#03060f` | Deep black | Page background |
| `#10b981` | Emerald | Primary CTA, icons |
| `#34d399` | Light emerald | Text accents, tags |
| `#fbbf24` | Gold | Secondary accent |
| `#818cf8` | Indigo | Tertiary accent |
| `rgba(232,237,245,…)` | Off-white | Body text |

### Typography
| Role | Font |
|---|---|
| Headlines | **Plus Jakarta Sans** 800 |
| Body | **DM Sans** 400/500 |
| Monospace / tags | **DM Mono** 400/500 |

### Buttons
```jsx
<button className="btn-em">Primary Emerald</button>
<button className="btn-outline">Ghost</button>
<button className="btn-gold">Gold Accent</button>
```

### Cards
```css
.info-card    /* Dark glass card with hover lift + glow border */
.glass-dark   /* Semi-transparent backdrop blur panel */
.section-label/* Emerald pill eyebrow label */
```

---

## ✨ Special Features

| Feature | Description |
|---|---|
| **Custom cursor** | Green dot + lagging ring, expands on hoverable elements |
| **Particle field** | 18 floating green micro-dots in hero background |
| **Animated counters** | Numbers count up when scrolled into view |
| **Scroll reveal** | Cards animate up as they enter the viewport |
| **Glassmorphism nav** | Navbar transitions from transparent → frosted blur |
| **Glow orbs** | Pulsing radial gradients in background layers |
| **Grid texture** | Subtle dot-grid overlay for depth |
| **Top bar shimmer** | Gradient shimmer edge on card hover |
| **Floating badges** | Urgency badges float with CSS animation |

---

## 📐 Responsive Breakpoints
- Mobile-first using Tailwind's `md:` and `lg:` prefixes
- `clamp()` for fluid typography
- Grid auto-fit for cards (collapses gracefully to 1 column)

---

## 🖱️ Interactions Map

| Element | Interaction |
|---|---|
| Any link/button | Custom cursor ring expands |
| Info cards | Lift + emerald glow border on hover |
| Programme card CTA | Full background color flip on hover |
| Navbar | Glass + shadow appears after 40px scroll |
| Stats counter | Counts from 0 when visible |
| Hero card | Floating with CSS keyframe animation |
| Floating badges | Gentle vertical float animation |
