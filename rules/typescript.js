module.exports = {
  plugins: ['@typescript-eslint'],

  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  rules: {
    '@typescript-eslint/explicit-function-return-type': 0, // reconsider
    '@typescript-eslint/explicit-module-boundary-types': 0, // reconsider
    '@typescript-eslint/member-delimiter-style': [
      'error',
      { multiline: { delimiter: 'none' } },
    ],
    '@typescript-eslint/no-explicit-any': 0, // reconsider
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
}
