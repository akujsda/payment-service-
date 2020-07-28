module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
  },
  'extends': [
    'plugin:react/recommended',
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 11,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    "linebreak-style": 0,
    "react/prop-types": 0,
  },
};
