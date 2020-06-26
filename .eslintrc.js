module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    "react": {
      "version": "detect",
    },
  },
  plugins: [
    'react'
  ],
  rules: {
    "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
    "space-before-function-paren": 0
  }
}
