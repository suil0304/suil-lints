// @ts-check

/**
 * @import { Config } from "stylelint"
 */

/**
 * @type {Config}
 */
const lintStyle = {
    plugins: [
        "@stylistic/stylelint-plugin"
    ],
    rules: {
        // style
        "@stylistic/indentation": 4,
        "max-nesting-depth": 3,
        // pattern
        "selector-class-pattern": "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$",
        "custom-property-pattern": "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$",
    }
};

export default lintStyle;