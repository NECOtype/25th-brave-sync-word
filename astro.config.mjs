// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import svelte from "@astrojs/svelte";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    integrations: [svelte()],
    adapter: cloudflare(),
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
        }
    ],
});