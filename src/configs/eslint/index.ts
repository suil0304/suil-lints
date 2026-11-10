import { Linter } from "eslint";
// recomended
import base from "./base";
import typescript from "./typescript";
import react from "./react";

export * from "./base";
export * from "./typescript";
export * from "./react";

interface _LintRecommendations {
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
} satisfies _LintRecommendations;