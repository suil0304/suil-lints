import { defineConfig, globalIgnores } from "eslint/config";
import { makeTsParserOption } from "./src/configs/eslint/utils";
// recommended
import js from "@eslint/js";
import tslint from "typescript-eslint";
import suilEslint from "./src/configs/eslint";
// plugins
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
    globalIgnores([
        "dist",
        "node_modules",
        "release",
        "./*.config.js"
    ]),
    {
        files: [
            "**/*.{ts,js}"
        ],
        plugins: {
            "@stylistic": stylistic
        },
        languageOptions: {
            parserOptions: makeTsParserOption(import.meta.dirname)
        },
        extends: [
            js.configs.recommended,
            tslint.configs.recommended,
            suilEslint.recommendedTs
        ]
    }
]);
