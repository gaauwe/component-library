import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import renameNodeModules from "rollup-plugin-rename-node-modules";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        dir: "./dist",
        format: "es",
        preserveModules: true,
        sourcemap: true,
        preserveModulesRoot: "src",
      },
    ],
    plugins: [
      del({ targets: "dist/*" }),
      peerDepsExternal(),
      resolve(),
      renameNodeModules("ext"),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "dist/dts/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts(), del({ targets: "dist/dts", hook: "buildEnd" })],
  },
];
