// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    integrations: [svelte()],
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Bricolage Grotesque",
            cssVariable: "--font-body",
            fallbacks: ["sans-serif"],
        },
        {
            provider: fontProviders.fontsource(),
            name: "Geist",
            cssVariable: "--font-heading",
            fallbacks: ["sans-serif"],
        },
    ],
});