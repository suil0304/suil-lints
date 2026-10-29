// @ts-check
import stylistic from "@stylistic/eslint-plugin";

/**
 * @import { Linter } from "eslint"
 */

/**
 * @type {Linter.Config}
 */
const lintStyle = {
    name: "suil-lints/eslint/typescript",
    plugins: {
        "@stylistic": stylistic
    },
    rules: {
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                selector: "typeLike",
                format: ["PascalCase"]
            },
            {
                selector: "function",
                format: [
                    "camelCase",
                ],
                leadingUnderscore: "allow"
            },
            {
                selector: "variable",
                modifiers: ["const"],
                format: [
                    "UPPER_CASE",
                    "camelCase",
                    "PascalCase"
                ],
                leadingUnderscore: "allow"
            },
            {
                selector: "variable",
                types: ["function"],
                format: [
                    "camelCase",
                ],
                leadingUnderscore: "allow"
            },
            {
                // Protected members use a single `_` prefix.
                selector: "memberLike",
                modifiers: ["protected"],
                format: ["camelCase"],
                leadingUnderscore: "require"
            },
            {
                // Private members use a double `__` prefix.
                selector: "memberLike",
                modifiers: ["private"],
                format: ["camelCase"],
                leadingUnderscore: "requireDouble"
            },
            {
                // Allow quoted kebab-case object/type properties
                selector: ["objectLiteralProperty", "typeProperty"],
                modifiers: ["requiresQuotes"],
                format: null,
                custom: {
                    regex: "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$",
                    match: true
                }
            },
            {
                selector: [
                    "objectLiteralProperty",
                    "typeProperty",
                    "property"
                ],
                format: ["camelCase"],
                leadingUnderscore: "allow"
            },
            {
                selector: "variableLike",
                format: ["camelCase"],
                leadingUnderscore: "allow"
            },
            {
                selector: "default",
                format: null,
                leadingUnderscore: "allow",
                trailingUnderscore: "allow"
            }
        ]
    }
};

export default lintStyle;