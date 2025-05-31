<script>
	import { wordOfTheDay } from "@/lib/stores";
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

<button
	class="inline-flex items-center justify-center cursor-pointer bg-blue text-sm text-brightWhite py-2 px-5 w-[10ch]"
	onclick={copyTheWord}>{label}</button
>