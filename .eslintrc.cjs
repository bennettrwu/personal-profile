module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    './node_modules/gts',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    semi: 'error',
    'prettier/prettier': [
      'warn',
      {
        extends: ['plugin:prettier/recommended'],
        endOfLine: 'auto',
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        jsxSingleQuote: true,
        printWidth: 125,
      }
    ],
    '@typescript-eslint/no-explicit-any': ['off'],
  },
}
