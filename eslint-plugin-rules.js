/* eslint-disable no-magic-numbers */
module.exports = {
  'import/no-extraneous-dependencies': [
    'error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    },
  ],
  'import/order': [
    'error', {
      'groups': ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index', 'object'],
      'newlines-between': 'always',
    },
  ],
  'init-declarations': 'off',
  'prefer-arrow/prefer-arrow-functions': [
    'warn',
    {
      classPropertiesAllowed: false,
      disallowPrototype: true,
      singleReturnOnly: false,
    },
  ],
  'radar/cognitive-complexity': ['error', 15],
  'radar/no-all-duplicated-branches': 'error',
  'radar/no-collapsible-if': 'error',
  'radar/no-collection-size-mischeck': 'error',
  'radar/no-duplicate-string': ['error', 4],
  'radar/no-duplicated-branches': 'error',
  'radar/no-element-overwrite': 'error',
  'radar/no-extra-arguments': 'error',
  'radar/no-identical-conditions': 'error',
  'radar/no-identical-expressions': 'error',
  'radar/no-identical-functions': 'error',
  'radar/no-one-iteration-loop': 'error',
  'radar/no-redundant-boolean': 'error',
  'radar/no-same-line-conditional': 'error',
  'radar/no-small-switch': 'error',
  'radar/no-unused-collection': 'error',
  'radar/no-use-of-empty-return-value': 'error',
  'radar/prefer-immediate-return': 'error',
  'radar/prefer-object-literal': 'error',
  'radar/prefer-single-boolean-return': 'error',
  'radar/prefer-while': 'error',
  'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],
  'unicorn/better-regex': 'error',
  'unicorn/consistent-destructuring': 'error',
  'unicorn/custom-error-definition': 'error',
  'unicorn/error-message': 'error',
  'unicorn/escape-case': 'error',
  'unicorn/expiring-todo-comments': 'error',
  'unicorn/explicit-length-check': 'error',
  'unicorn/filename-case': [
    'error', {
      cases: {
        camelCase: true,
        kebabCase: true,
        pascalCase: true,
      },
    },
  ],
  'unicorn/no-array-push-push': 'error',
  'unicorn/no-console-spaces': 'error',
  'unicorn/no-for-loop': 'error',
  'unicorn/no-hex-escape': 'error',
  'unicorn/no-instanceof-array': 'error',
  'unicorn/no-nested-ternary': 'error',
  'unicorn/no-new-buffer': 'error',
  'unicorn/no-this-assignment': 'error',
  'unicorn/no-unreadable-array-destructuring': 'error',
  'unicorn/no-unsafe-regex': 'error',
  'unicorn/no-unused-properties': 'error',
  'unicorn/no-zero-fractions': 'error',
  'unicorn/number-literal-case': 'error',
  'unicorn/numeric-separators-style': 'error',
  'unicorn/prefer-array-find': 'error',
  'unicorn/prefer-array-flat': 'error',
  'unicorn/prefer-array-flat-map': 'error',
  'unicorn/prefer-array-index-of': 'error',
  'unicorn/prefer-array-some': 'error',
  'unicorn/prefer-date-now': 'error',
  'unicorn/prefer-default-parameters': 'error',
  'unicorn/prefer-dom-node-append': 'error',
  'unicorn/prefer-dom-node-dataset': 'error',
  'unicorn/prefer-dom-node-remove': 'error',
  'unicorn/prefer-dom-node-text-content': 'error',
  'unicorn/prefer-includes': 'error',
  'unicorn/prefer-math-trunc': 'error',
  'unicorn/prefer-modern-dom-apis': 'error',
  'unicorn/prefer-negative-index': 'error',
  'unicorn/prefer-number-properties': 'error',
  'unicorn/prefer-optional-catch-binding': 'error',
  'unicorn/prefer-query-selector': 'error',
  'unicorn/prefer-regexp-test': 'error',
  'unicorn/prefer-set-has': 'error',
  'unicorn/prefer-spread': 'error',
  'unicorn/prefer-string-replace-all': 'error',
  'unicorn/prefer-string-slice': 'error',
  'unicorn/prefer-string-starts-ends-with': 'error',
  'unicorn/prefer-string-trim-start-end': 'error',
  'unicorn/prefer-ternary': ['error', 'only-single-line'],
  'unicorn/prefer-type-error': 'error',
  'unicorn/prevent-abbreviations': [
    'error', {
      replacements: {
        num: false,
        req: { request: false },
        res: { response: false },
      },
    },
  ],
  'unicorn/throw-new-error': 'error',
};
