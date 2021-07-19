module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['"Source Sans Pro"', 'system-ui'],
      'serif': ['sans-serif', 'ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
