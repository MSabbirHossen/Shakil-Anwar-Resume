/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0f1a",
        surface: "#111827",
        "surface-elevated": "#1a2436",
        "surface-border": "#1e293b",
        accent: {
          DEFAULT: "#2dd4a7",
          hover: "#24b48d",
          light: "#5eead4",
          muted: "rgba(45, 212, 167, 0.12)",
          glow: "rgba(45, 212, 167, 0.25)"
        },
        secondary: {
          DEFAULT: "#38bdf8",
          muted: "rgba(56, 189, 248, 0.12)"
        },
        muted: "#94a3b8",
        subtle: "#64748b"
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
