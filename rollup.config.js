import svelte from "rollup-plugin-svelte"

export default {
  input: "src/main.js",
  output: {
    file: "public/bundle.js",
    format: "iife",
  },
  plugins: [
    svelte({
      onwarn: (warning, handler) => {
        const { code, frame } = warning

        if (code === "anchor-is-valid" || code === "a11y-autofocus") return

        if (code === "css-unused-selector" && frame.includes("shape")) return

        handler(warning)
      },
    }),
  ],
}
