import { Config } from "stylelint";

export default {
    extends: [
        "stylelint-config-standard-scss"
    ],
    rules: {
        "scss/dollar-variable-pattern": "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$",
        "scss/at-mixin-pattern": "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$"
    }
} satisfies Config;
