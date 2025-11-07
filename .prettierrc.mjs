// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles/global.css',
  trailingComma: 'all',
  printWidth: 100,
  useTabs: false,
  semi: true,
  astroAllowShorthand: false,
  proseWrap: 'preserve',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['**/*.jsonc'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
};
