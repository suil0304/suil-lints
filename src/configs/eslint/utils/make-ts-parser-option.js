// @ts-check

/**
 * @param dirname {string}
 */
export function makeTsParserOption(dirname) {
    return {
        projectService: true,
        tsconfigRootDir: dirname
    };
}