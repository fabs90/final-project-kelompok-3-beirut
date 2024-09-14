import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-compare-neg-zero": "warn",
      "no-const-assign": "warn",
      "no-control-regex": "warn",
      "arrow-body-style": "error",
    },
  },
];
