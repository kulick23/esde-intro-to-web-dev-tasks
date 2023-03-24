module.exports = {
  extends: [
    "eslint-config-airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    // to enforce using type for object type definitions, can be type or interface
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "no-void": ["error", { allowAsStatement: true }],
    "no-plusplus": [
      "error",
      {
        // well known and common pattern which will guarantee that there won't be any misuses by design
        allowForLoopAfterthoughts: true,
      },
    ],
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": "off",
  },
};
