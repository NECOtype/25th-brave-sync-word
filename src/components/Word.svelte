<script>
	import { onMount } from "svelte";
	import { bip39Words } from "@/lib/bip39Words";
	import { wordOfTheDay } from "@/lib/stores";

	let theWord;

	onMount(async () => {
		const epoch = new Date(Date.UTC(2022, 4, 10));
		const now = new Date();
		const delta = Math.round((+now - +epoch) / (24 * 60 * 60 * 1000));

		if (delta < 0) {
			theWord = "Invalid date...";
			return;
		}

		const the25thWord = bip39Words[delta];
		theWord = the25thWord;
		wordOfTheDay.set(the25thWord);
	});
</script>

<span class="">{theWord}</span>

<style>
</style>
