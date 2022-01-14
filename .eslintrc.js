module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'linebreak-style': 0,
    'global-require': 0,
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.ts'],
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        custom: 'ignore',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
