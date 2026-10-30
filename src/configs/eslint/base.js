// @ts-check
import stylistic from "@stylistic/eslint-plugin";

/**
 * @import { Linter } from "eslint"
 */

/**
 * @type {Linter.Config}
 */
const lintStyle = {
    name: "suil-lints/eslint/base",
    plugins: {
        "@stylistic": stylistic
    },
    rules: {
        // Indentation and statement punctuation
        "@stylistic/indent": ["error", 4, { SwitchCase: 1 }],
        "@stylistic/semi": ["error", "always"],
        "@stylistic/comma-dangle": ["error", "never"],
        "@stylistic/eol-last": ["error", "always"],
        "@stylistic/no-trailing-spaces": "error",

        // Object / dictionary literal formatting
        "@stylistic/object-curly-spacing": ["error", "always"],
        "@stylistic/array-bracket-spacing": ["error", "never"],
        "@stylistic/comma-spacing": "error",
        "@stylistic/key-spacing": [
            "error",
            {
                ignoredNodes: ["TSPropertySignature"],
                beforeColon: false,
                afterColon: true
            }
        ],

        // Use `if()` rather than `if ()`
        "@stylistic/keyword-spacing": [
            "error",
            {
                before: true,
                after: true,
                overrides: {
                    if: { after: false },
                    for: { after: false },
                    while: { after: false },
                    switch: { after: false },
                    catch: { after: false }
                }
            }
        ],

        // K&R / 1TBS brace style
        "@stylistic/space-before-blocks": ["error", "always"],
        "@stylistic/brace-style": ["error", "1tbs"],

        // Prefer simple ternaries and early returns
        "@stylistic/multiline-ternary": ["error", "never"],
        "no-nested-ternary": "error",
        "no-else-return": "error",
    }
};

export default lintStyle;