import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: true,
  dts: true,
  minify: true,
  format: ["esm"],
  clean: true,
  minifyWhitespace: true,
  treeshake: true,
  minifySyntax: true,
  skipNodeModulesBundle: true,
  target: "es2020",
});
