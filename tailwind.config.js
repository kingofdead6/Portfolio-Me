// tailwind.config.js
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-size': '10px 10px',
      }
  },
  variants: {
  
  }
  },
  plugins: [],
};
