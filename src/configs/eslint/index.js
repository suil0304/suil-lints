// @ts-check
import base from "./base.js";
import typescript from "./typescript.js";
import react from "./react.js";

export * from "./base.js";
export * from "./typescript.js";
export * from "./react.js";

/**
 * @import { Linter } from "eslint"
 */

/**
 * @typedef {{
 *      readonly recommendedJs:Linter.Config,
 *      readonly recommendedTs:Linter.Config[],
 *      readonly recommendedReact:Linter.Config[],
 *      readonly recommendedReactTs:Linter.Config[]
 * }} _LintRecommendations
 */

/**
 * @type {_LintRecommendations}
 */
const lintStyle = {
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
};

export default lintStyle;