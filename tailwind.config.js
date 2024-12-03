module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React component files
  ],
  theme: {
    extend: {
      colors: {
        LightBrown: 'rgba(241,236,230,255)', // Add your custom color
        LightGreen: 'rgba(118,183,205,255)', // Add your custom color
        LightGrey: 'rgba(131,129,126,255)', // Add your custom color
      },
    }, // Extend the default theme if needed
  },
  plugins: [],
};
