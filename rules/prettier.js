module.exports = {
  plugins: ['prettier'],

  extends: ['plugin:prettier/recommended', 'prettier/@typescript-eslint'],

  rules: {
    'prettier/prettier': ['error', require('../.prettierrc')],
  },
}
