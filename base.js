module.exports = {
  extends: ['eslint:recommended'],

  rules: {
    'arrow-body-style': 0, // reconsider
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'consistent-return': 0, // reconsider
    'implicit-arrow-linebreak': 0, // reconsider
    'no-nested-ternary': 0,
    'no-return-assign': 0,
    'no-tabs': 0,
    'object-curly-newline': ['error', { consistent: true }],
  },
}
