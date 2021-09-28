import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-static"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    // ...svelte-preprocess options
  }),
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    //adapter: firebase(),
    adapter: adapter({
      // default options are shown
      pages: "build",
      assets: "build",
      fallback: null,
    }),
    target: "#svelte",
  },
}

export default config
