export default {
  // Type check TypeScript files
  "**/*.(ts)": () => "yarn tsc --noEmit",

  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|js)": () => [
    "yarn biome check --apply-unsafe ./src",
    "yarn dlx @biomejs/biome format --write ./src"
  ],

  // Format MarkDown and JSON
  "**/*.(md|json)": () => "yarn dlx @biomejs/biome format --write ./src"
};
