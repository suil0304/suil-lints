// @ts-check

/**
 * @import { Config } from "stylelint"
 */

/**
 * @type {Config}
 */
const lintStyle = {
    extends: [
        "stylelint-config-standard-scss"
    ],
    rules: {
        "scss/dollar-variable-pattern": "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$",
        "scss/at-mixin-pattern": "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$"
    }
};

export default lintStyle;