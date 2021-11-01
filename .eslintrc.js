module.exports = {
  env: {
    browser: true,
    commonjs: false,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: ['react'],
  rules: {},
  settings: {
    react: {
      version: 'detect',
    },
  },
};
