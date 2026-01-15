/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class", // Enable dark mode support
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/*/.{js,ts,jsx,tsx}",
    "./app/*/.{js,ts,jsx,tsx}", // If using Next.js App Router
  ],
  theme: {
    extend: {
      colors: {
        "custom-red": "#AB010D",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        apple: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
