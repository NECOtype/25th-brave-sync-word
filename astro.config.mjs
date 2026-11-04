// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    integrations: [svelte()],
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Space Mono",
            cssVariable: "--font-body",
            fallbacks: ["monospace"],
        },
        {
            provider: fontProviders.fontsource(),
            name: "Bricolage Grotesque",
            cssVariable: "--font-heading",
            fallbacks: ["sans-serif"],
        },
    ],
});