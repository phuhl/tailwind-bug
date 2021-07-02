module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  overrides: [
    {
      files: ["*-?test.js", "*test.js"],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    "no-unused-vars": 1,
    "no-var": 1,
    "prefer-const": 1,
    "no-unneeded-ternary": "error",
    "prefer-arrow-callback": 1,
    "consistent-return": ["error", { treatUndefinedAsUnspecified: false }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
