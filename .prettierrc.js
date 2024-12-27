/** @type {import("prettier").Config} */
const config = {
  semi: true,
  tabWidth: 2,
  printWidth: 80,
  endOfLine: 'crlf',
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: 'all',
  arrowParens: 'always',
  bracketSameLine: true,
  vueIndentScriptAndStyle: true,
  plugins: ['prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.vue, *.css, *.scss, *.html',
      options: {
        parser: 'vue, html, css, scss',
      },
    },
  ],
};

export default config;
