/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#775a19",
        surface: "#fbf9fb",
        "surface-container-low": "#f5f3f5",
        "surface-container-high": "#eae7ea",
        outline: "#75777e",
        "outline-variant": "#c5c6cd",
        "on-surface": "#1b1b1d",
        "on-surface-variant": "#44474d",
      },
      fontFamily: {
        headline: ["Source Sans 3", "Cairo", "sans-serif"],
        body: ["Source Sans 3", "Cairo", "sans-serif"],
        technical: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
