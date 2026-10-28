// @ts-check
import stylistic from "@stylistic/eslint-plugin";

/**
 * @import { Linter } from "eslint"
 */

/**
 * @type {Linter.Config}
 */
const lintStyle = {
    name: "suil-lints/eslint/react",
    plugins: {
        "@stylistic": stylistic
    },
    rules: {
        // nothing lol
    }
};

export default lintStyle;