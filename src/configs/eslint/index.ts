import { Linter } from "eslint";
// recomended
import base from "./base.js";
import typescript from "./typescript.js";
import react from "./react.js";

export * from "./base.js";
export * from "./typescript.js";
export * from "./react.js";

interface LintRecommendations {
    readonly recommendedJs:Linter.Config;
    readonly recommendedTs:Linter.Config[];
    readonly recommendedReact:Linter.Config[];
    readonly recommendedReactTs:Linter.Config[];
}

export default {
    recommendedJs: base,
    recommendedTs: [
        base,
        typescript
    ],
    recommendedReact: [
        base,
        react
    ],
    recommendedReactTs: [
        base,
        typescript,
        react
    ]
} satisfies LintRecommendations;
