/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        scotland: {
          blue: "#0065BF", // Azul bandera escocesa
          green: "#2D5C33", // Verde típico de Highlands
          white: "#FFFFFF",
          gray: "#F0F4F9", // Fondo claro
        },
      },
    },
  },
  plugins: [],
};
