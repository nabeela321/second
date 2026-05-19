/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        ink: {
          950: "#03060f",
          900: "#060d1e",
          800: "#0d1a35",
          700: "#14274d",
        },
        emerald: {
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
        gold: {
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
        },
        coral: "#ff6b6b",
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up":    "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in":    "fadeIn 0.6s ease both",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "spin-slow":  "spin 20s linear infinite",
        "float-y":    "floatY 5s ease-in-out infinite",
        "counter":    "counter 2s ease both",
        "shimmer":    "shimmer 2.5s linear infinite",
        "slide-in":   "slideIn 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
      keyframes: {
        fadeUp:    { "0%": { opacity:0, transform:"translateY(32px)" }, "100%": { opacity:1, transform:"translateY(0)" } },
        fadeIn:    { "0%": { opacity:0 }, "100%": { opacity:1 } },
        glowPulse: { "0%,100%": { opacity:0.6, transform:"scale(1)" }, "50%": { opacity:1, transform:"scale(1.08)" } },
        floatY:    { "0%,100%": { transform:"translateY(0)" }, "50%": { transform:"translateY(-14px)" } },
        shimmer:   { "0%": { backgroundPosition:"-200% 0" }, "100%": { backgroundPosition:"200% 0" } },
        slideIn:   { "0%": { opacity:0, transform:"translateX(-20px)" }, "100%": { opacity:1, transform:"translateX(0)" } },
      },
      boxShadow: {
        "glow-em":  "0 0 40px rgba(16,185,129,0.25), 0 0 80px rgba(16,185,129,0.1)",
        "glow-gold":"0 0 40px rgba(251,191,36,0.25)",
        "card":     "0 4px 24px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.2)",
        "card-hover":"0 20px 60px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)",
        "inner-top":"inset 0 1px 0 rgba(255,255,255,0.12)",
      },
    },
  },
  plugins: [],
};
