import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImport from "eslint-plugin-import";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { ignores: ["cdk.out", "node_modules", "dist", "build", "jest.config.js"] },
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "sort-imports": ["error", { ignoreCase: true, ignoreDeclarationSort: true, ignoreMemberSort: false }],
    },
  },
];
