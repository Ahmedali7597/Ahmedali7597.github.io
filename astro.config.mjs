// GitHub Pages serves this repository (Ahmedali7597.github.io) at the root of ahmedali7597.github.io.
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ahmedali7597.github.io",
  // The site used to live at /Portfolio/; old links (like the LinkedIn post) land on the front page.
  redirects: { "/Portfolio": "/" },
});
