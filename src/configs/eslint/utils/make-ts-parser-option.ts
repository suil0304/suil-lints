export function makeTsParserOption(dirname:string) {
    return {
        projectService: true,
        tsconfigRootDir: dirname
    };
}