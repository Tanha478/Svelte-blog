// ✅ 1. 'require' ko 'import' me convert kiya hai
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class", // 🌙 Enable dark mode with a class (e.g. <body class="dark">)
  theme: {
    extend: {
      colors: {
        // ✅ 2. Custom dark background color add kiya
        "dark-background": "#0F161E"
      }
    }
  },
  plugins: [
    // ✅ 3. Ab ES module imports ka use ho raha hai
    typography,
    aspectRatio
  ]
};
