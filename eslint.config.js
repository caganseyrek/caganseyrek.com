import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
      pluginReactHooks.configs.flat.recommended,
      pluginReactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-alert": "warn",
      "no-console": "warn",
      "no-constant-condition": "error",
      "no-debugger": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-unreachable": "error",
      "use-isnan": "error",
      eqeqeq: ["error", "smart"],
      "no-eval": "error",
      "no-floating-decimal": "error",
      "no-new": "error",
      "no-return-assign": "error",
      "no-self-compare": "error",
      "no-undef-init": "error",
      "no-var": "error",
      "no-unused-vars": "error",
      "comma-dangle": ["error", "always-multiline"],
      "comma-spacing": ["error", { before: false, after: true }],
      "comma-style": ["error", "last"],
      "new-parens": "error",
      "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
      quotes: ["error", "double", { avoidEscape: true }],
    },
  },
]);
