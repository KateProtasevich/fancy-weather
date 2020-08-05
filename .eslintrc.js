module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'no-plusplus': 'off',
    'no-eval': 'off',
    "no-console": "off",
    "no-unused-vars": "off",
    "import/no-cycle": "off",
    "no-undef": "off",
    "import/no-mutable-exports": "off",
    "prefer-destructuring": ["error", {"object": false, "array": false}],
    "no-param-reassign": ["error", { "props": false }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "always"
      }
   ]
  },
};
