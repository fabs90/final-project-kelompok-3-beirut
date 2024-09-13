const js = require("@eslint/js");
const globals = require('globals')

module.exports = [
  js.configs.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-compare-neg-zero": "warn",
      "no-const-assign": "warn",
      "no-control-regex": "warn"
    },
    languageOptions: {
      ecmaVersion: 2015,  // Atau bisa menggunakan 6
      sourceType: "module"
    }
  }
];
