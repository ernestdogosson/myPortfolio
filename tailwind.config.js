export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Instrument Serif'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        surface: "var(--bg-surface)",
        elevated: "var(--bg-elevated)",
        alt: "var(--bg-alt)",
        page: "var(--bg-page)",
        txt: "var(--text-primary)",
        "txt-secondary": "var(--text-secondary)",
        "txt-muted": "var(--text-muted)",
        "txt-faint": "var(--text-faint)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-subtle": "var(--accent-subtle)",
        bdr: "var(--border-primary)",
        "bdr-light": "var(--border-light)",
        "bdr-strong": "var(--border-strong)",
        "btn-primary": "var(--btn-primary-bg)",
        "btn-primary-text": "var(--btn-primary-text)",
        "btn-primary-hover": "var(--btn-primary-hover)",
      },
      backgroundColor: {
        nav: "var(--nav-bg)",
        backdrop: "var(--backdrop)",
      },
    },
  },
  plugins: [],
};
