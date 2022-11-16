module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: [
    './src/**/*.html',
    './../sections/*.liquid',
    './../snippets/*.liquid'
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
