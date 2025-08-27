// tailwind.config.js
module.exports = {
  darkMode: "class", // enable dark mode using .dark class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        bgPrimary: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",
        bgGlass: "var(--bg-glass)",
        borderGlass: "var(--border-glass)",
      },
      boxShadow: {
        glass: "var(--shadow-glass)",
      },
      transitionProperty: {
        skin: "var(--transition)",
      },
      fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    },
  },
  plugins: [],
};
