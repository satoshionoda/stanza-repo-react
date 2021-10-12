import typescript from "@rollup/plugin-typescript";

export default function config(environment) {
  return {
    rollup: {
      plugins: [
        typescript(),
      ],
    },
  };
}
