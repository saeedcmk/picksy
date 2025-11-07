import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
	globalIgnores(["dist"]),
	reactHooks.configs.flat["recommended-latest"],
	{
		files: ["**/*.{js,cjs,mjs,ts,jsx,tsx}"],

		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactRefresh.configs.vite,
			importPlugin.flatConfigs.recommended,
			importPlugin.flatConfigs.typescript,
			prettierPlugin,
		],

		plugins: {
			"simple-import-sort": simpleImportSortPlugin,
		},

		rules: {
			"import/first": "error",
			"import/newline-after-import": "error",
			"import/no-duplicates": "error",
			"import/no-unresolved": "off",

			"simple-import-sort/imports": [
				"error",
				{ groups: [["^\\u0000", "^node:", "^@?\\w", "^", "^\\."]] },
			],
			"simple-import-sort/exports": "error",

			"prettier/prettier": "warn",

			"@typescript-eslint/no-unused-vars": "warn",
			"@typescript-eslint/no-explicit-any": "off",
		},

		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
	},
]);
