import { defineConfig } from "eslint/config";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

export default defineConfig([
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "plugin:prettier/recommended"],
    rules: {
      semi: "error",
      "prefer-const": "error",
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: false,
          tabWidth: 2,
          trailingComma: "es5",
          printWidth: 120,
        },
      ],
    },
  }),
]);
