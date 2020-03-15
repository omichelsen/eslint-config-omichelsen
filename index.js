module.exports = {
  extends: [
    './base',
    './rules/typescript',
    './rules/react',
    './rules/react-hooks',
    './rules/prettier',
  ].map(require.resolve),
  env: {
    node: true,
    es6: true,
    jest: true,
    browser: true,
  },
  rules: {},
}
