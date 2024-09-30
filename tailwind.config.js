// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
        mono: ["Courier New", "Monaco", "monospace"],
        roboto: ["Roboto", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        playfair: ["Playfair Display", "serif"],
        nunito: ["Nunito", "sans-serif"],
        firacode: ["Fira Code", "monospace"],
        inconsolata: ["Inconsolata", "monospace"],
      },
      fontSize: {
        'tiny': '0.625rem', 
        'huge': '5rem',    
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
