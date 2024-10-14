/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pal_emerald_green: "#50C878",
        pal_neon_purple: "#BC13FE",
        pal_baby_blue: "#89CFF0",
        "pal_dark_gray-300": "#2E2E2E",
        "pal_dark_gray-200": "#4A4A4A",
        "pal_dark_gray-100": "#6B6B6B",
        pal_soft_pastel_pink: "#FFC1CC",
        pal_muted_coral: "#FF6F61",
        pal_pale_mint: "#98FF98",
        pal_vibrant_yellow: "#FFDD57",
      },
      animation: {
        "gradient-x": "gradient-x 5s ease infinite",
        "gradient-x-slow": "gradient-x 45s ease infinite",
        "gradient-y": "gradient-y 5s ease infinite",
        "gradient-xy": "gradient-xy 5s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        "gradient-y": {
          "0%, 100%": { "background-position": "50% 0%" },
          "50%": { "background-position": "50% 100%" },
        },
        "gradient-xy": {
          "0%, 100%": { "background-position": "0% 0%" },
          "50%": { "background-position": "100% 100%" },
        },
      },
    },
  },
  plugins: [],
};
