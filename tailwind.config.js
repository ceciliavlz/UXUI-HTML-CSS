/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--c-bg) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        "surface-2": "rgb(var(--c-surface-2) / <alpha-value>)",
        "surface-3": "rgb(var(--c-surface-3) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        accent: "rgb(var(--c-accent) / <alpha-value>)",
        "accent-hover": "rgb(var(--c-accent-hover) / <alpha-value>)",
        "accent-active": "rgb(var(--c-accent-active) / <alpha-value>)",
        "accent-soft": "rgb(var(--c-accent-soft) / <alpha-value>)",
        "on-accent": "rgb(var(--c-on-accent) / <alpha-value>)",
        lilac: "rgb(var(--c-lilac) / <alpha-value>)",
        "lilac-soft": "rgb(var(--c-lilac-soft) / <alpha-value>)",
        gold: "rgb(var(--c-gold) / <alpha-value>)",
        focus: "rgb(var(--c-focus) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "Times New Roman", "serif"],
        sans: ['"Outfit"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"Outfit"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "78rem",
      },
      boxShadow: {
        card: "0 1px 0 0 rgb(var(--c-line) / 0.7), 0 28px 70px -48px rgb(46 36 48 / 0.55)",
        soft: "0 18px 50px -34px rgb(132 38 77 / 0.35)",
        lift: "0 30px 70px -38px rgb(var(--c-accent) / 0.42)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.2, 0.7, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
