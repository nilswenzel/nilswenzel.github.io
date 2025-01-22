/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 2.7s ease-out .8s forwards",
        cursor: "cursor .6s linear infinite alternate",
      },
      keyframes: {
        typewriter: {
          '0%': { transform: 'translateX(0ch)' },
          '5%, 9%': { transform: 'translateX(1ch)' },
          '14%, 18%': { transform: 'translateX(2ch)' },
          '23%, 27%': { transform: 'translateX(3ch)' },
          '32%, 36%': { transform: 'translateX(4ch)' },
          '41%, 45%': { transform: 'translateX(5ch)' },
          '50%, 54%': { transform: 'translateX(6ch)' },
          '59%, 63%': { transform: 'translateX(7ch)' },
          '68%, 72%': { transform: 'translateX(8ch)' },
          '77%, 81%': { transform: 'translateX(9ch)' },
          '86%, 90%': { transform: 'translateX(10ch)' },
          '95%, 100%': { transform: 'translateX(12ch)' },
        },
      },
      variants: {
        animation: ["motion-safe"],
      },
    },
  }
};
