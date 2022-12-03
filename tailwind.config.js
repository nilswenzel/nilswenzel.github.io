/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        // css animation attributes
        fadeFromLeft1000ms: "fadeIn 1s forwards", // duration: 0.8s; delay: 200ms; forwards to keep last state ("from")
        fadeFromLeft1200ms: "fadeIn 1s 200ms forwards", // duration: 1s; forwards to keep last state ("from")
        fadeFromLeft1400ms: "fadeIn 1s 400ms forwards", // duration: 1s; delay: 200ms; forwards to keep last state ("from")
        fadeFromLeft1600ms: "fadeIn 1s 600ms forwards", // duration: 1s; delay: 400ms; forwards to keep last state ("from")
        typewriter: "typewriter 2.7s ease-out .8s forwards",
        cursor: "cursor .6s linear infinite alternate",
      },
      keyframes: {
        // keyframe of the respective animation
        fadeIn: {
          from: {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateX(-100%)",
          },
          to: {
            opacity: 1,
            filter: "blur(0)",
            transform: "translateX(0)",
          },
        },
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
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
