/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#f2f0f0',
        customBlue: '#a4a9fc',
        customGreen: '#4cceac',
      },
      fontFamily: {
    
      },
      fontSize: {
        'xl': '1.75rem', // Custom font size for the name
        'base': '1rem',  // Custom font size for other text
      },
      textColor: {
        'primary': '#333', // Custom text color for primary content
        'gray': '#888',    // Custom text color for secondary content
      },
      fontWeight: {
        'semibold': '600', // Custom font weight for headings
        'normal': '400',   // Custom font weight for normal text
      },
    },
  },
  variants: {},
  plugins: [],
};
