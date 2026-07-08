<script>
    import { wordOfTheDay } from "../lib/stores";
    import { get } from "svelte/store";

    let label = $state("Copy");
    let word = $derived(wordOfTheDay);

    async function copyTheWord() {
        try {
            await navigator.clipboard.writeText(get(word));
            label = "Copied!";
            setTimeout(() => (label = "Copy"), 1500);
        } catch {
            alert("Failed to copy!");
        }
    }
</script>

<button onclick={copyTheWord}>{label}</button>

<style>
    button {
        width: 10ch;
        cursor: pointer;
        text-align: center;
        background-color: var(--background);
        border: 1px solid var(--blue);
        color: var(--blue);

        &:hover {
            background-color: var(--blue);
            color: var(--foreground);
        }
    }
</style>