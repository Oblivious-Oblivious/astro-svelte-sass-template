import { defineConfig } from "astro/config";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    integrations: [svelte()],

    /* NOTE Options for github pages deployment */
    // site: "https://Oblivious-Oblivious.github.io",
    // base: "/astro-svelte-sass-template"
});
