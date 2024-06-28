import { defineConfig } from "tsup";
import { glob } from "glob";
import fs from "fs-extra";
import path from "path";
const entries = glob.sync("src/@ui-kit/**/index.ts").reduce((acc, path) => {
  const _a = path.split("\\").slice(-2);

  acc[_a[0] === "@ui-kit" ? "index" : _a[0] + "/index"] = path;
  return acc as any;
}, {});

export default defineConfig({
  entry: entries,
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
  async onSuccess() {
    const exp = {};
    const packages = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./package.json"), "utf-8")
    );

    for (const key in entries) {
      const _k = key.split("/").reverse();
      _k[0] = ".";
      exp[_k.join("/")] = {
        import: entries[key]
          .split("\\")
          .join("/")
          .replace("src/@ui-kit", "./dist"),
        types: entries[key]
          .split("\\")
          .join("/")
          .replace("src/@ui-kit", "./dist")
          .replace("index.ts", "index.d.ts"),
      };
    }
    packages.exports = exp;
    fs.writeFileSync(
      path.join(__dirname, "./package.json"),
      JSON.stringify(packages)
    );
  },
});

process.on("beforeExit", (code) => {
  if (code === 0) {
    fs.copyFile(
      path.join(__dirname, "src/global.d.ts"),
      path.join(__dirname, "./dist/global.d.ts")
    );
    process.exit();
  }
});
