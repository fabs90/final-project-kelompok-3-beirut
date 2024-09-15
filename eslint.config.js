const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-compare-neg-zero": "warn",
      "no-const-assign": "warn",
      "no-control-regex": "warn",
      "arrow-body-style": "error",
      "no-undef": "off",
    },
  },
];
