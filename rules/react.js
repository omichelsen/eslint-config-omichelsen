module.exports = {
  plugins: ['react'],

  extends: ['plugin:react/recommended'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-indent-props': ['error', 'tab'],
    'react/jsx-indent': ['error', 'tab'],
    'react/jsx-one-expression-per-line': 0, // reconsider
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0, // reconsider
    'react/prop-types': 0,
    'react/static-property-placement': 0,
  },

  settings: {
    react: {
      version: 'latest',
    },
  },
}
