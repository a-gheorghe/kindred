module.exports = {
  parser: 'babel-eslint',
  "extends": ['airbnb', 'plugin:react/recommended'],
  rules: {
    // enabled
    'babel/semi': 1,
    'babel/no-invalid-this': 1,
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
    'object-curly-newline': ['error', {
      consistent: true,
    }],
    "comma-dangle": ["error", {
      "arrays": "ignore",
      "objects": "only-multiline",
      "imports": "only-multiline",
      "exports": "only-multiline",
      "functions": "ignore",
    }],


    // warnings
    'react/prop-types': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/no-unused-state': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/no-did-mount-set-state': 'warn',
    'react/require-default-props': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',

    // disabled
    'no-param-reassign': 'off',
    'linebreak-style': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-plusplus': 'off',
    'import/first': 'off',
    'no-useless-constructor': 'off',
    'no-nested-ternary': 'off',
    'radix': 'off',
    'react/sort-comp': 'off',
    'react/prefer-stateless-function': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-for': 'off',
  },
  plugins: [
    'babel',
    'react',
  ],
  env: {
    browser: true,
    node: true,
  },
};
