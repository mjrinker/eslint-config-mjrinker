/**
 * @file Defines the eslint configuration.
 * @author Matt Rinker
 */

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'jsdoc',
    'prefer-arrow',
    'radar',
    'sort-keys-fix',
    'unicorn',
  ],
  rules: {
    ...require(`${__dirname}/eslint-rules`),
    ...require(`${__dirname}/eslint-plugin-rules`),
  },
};
