module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '50rem',
      }
    },
    screens: {
      'sm': '375px',
      'md': '768px',      
      'lg': '1024px',
      
    },
  },
  plugins: [],
}