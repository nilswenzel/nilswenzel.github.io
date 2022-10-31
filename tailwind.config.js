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
      },
      variants: {
        animation: ["motion-safe"],
      },
    },
  },
  plugins: [],
};
