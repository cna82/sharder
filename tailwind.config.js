module.exports = {
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "spin-slow": "spin 18s linear infinite",
        ticker: "ticker 30s linear infinite",
      },
      fontFamily: {
        Vazirmatn: ["var(--font-vazir)"],
        DimaYekanBold: ["var(--font-DimaYekanBold)"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
