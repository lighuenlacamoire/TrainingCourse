module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/recommended',
  ],
  parser: "babel-eslint",
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    "react/prop-types": "off",
    'react-hooks/rules-of-hooks': "error",
    'react-hooks/exhaustive-deps': "off",
    'react/function-component-definition':
      [2, { namedComponents: "arrow-function" }],
    'arrow-body-style': [ 0, "as-needed", { "requireReturnForObjectLiteral": true }],
    'linebreak-style': 0,
    'global-require': 0,
    'no-use-before-define': 'off',
    'react/jsx-newline':
      [0,
        {
          prevent: 'true'
        }
      ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        custom: 'ignore',
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
