const eslintPlugin = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: [
      'dist/**/*.ts',
      'node_modules/*',
      '**/storybook-static/**/*',
      'rollup.config.js',
      '**/coverage/**/*',
    ],
    languageOptions: {
      parser,
    },
    plugins: {
      '@typescript-eslint': eslintPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...eslintPlugin.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
