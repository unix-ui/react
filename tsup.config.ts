import { defineConfig } from "tsup";
import { glob } from "glob";
import fs from "fs-extra";
import path from "path";
const entries = glob.sync("src/@ui-kit/**/index.ts").reduce((acc, path) => {
  const name = [...acc] as string[];
  name.push(path.split("\\").join("/"));

  return name as any;
}, []);

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
    fs.copyFile(
      path.join(__dirname, "src/global.d.ts"),
      path.join(__dirname, "./dist/global.d.ts")
    );
    const exp = {
      ".": {
        import: "./dist/index.js",
        types: "./dist/index.d.ts",
      },
    };
    let dirs = await fs.readdir(path.join(__dirname, "./dist"));
    const packages = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./package.json"), "utf-8")
    );

    dirs = dirs.filter((e) => !e.endsWith(".js") && !e.endsWith(".ts"));
    for (let i = 0; i < dirs.length; i++) {
      const el = dirs[i];
      const folder = await fs.readdir(path.join(__dirname, "./dist", el));
      folder.forEach(async (_a) => {
        if (_a.includes("index.js")) {
          const _p = `./dist/${el}/`;
          exp["./" + el] = {
            import: _p + "index.js",
            types: _p + "index.d.ts",
          };
        } else {
          (await fs.readdir(path.join(__dirname, "./dist", el, _a))).forEach(
            () => {
              const _p = `./dist/${el}/${_a}/`;
              exp["./" + _a] = {
                import: _p + "index.js",
                types: _p + "index.d.ts",
              };
            }
          );
        }
      });
    }
    packages.exports = exp;
    fs.writeFileSync(
      path.join(__dirname, "./package.json"),
      JSON.stringify(packages)
    );
  },
});
