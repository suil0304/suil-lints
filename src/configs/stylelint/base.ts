import { Config } from "stylelint";

export default {
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
} satisfies Config;