import stylistic from "@stylistic/eslint-plugin";
import { Linter } from "eslint";

export default {
    name: "suil-lints/eslint/react",
    plugins: {
        "@stylistic": stylistic
    },
    rules: {
        // nothing lol
    }
} satisfies Linter.Config;
