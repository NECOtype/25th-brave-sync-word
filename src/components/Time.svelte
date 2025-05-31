<script>
	import { onDestroy, onMount } from "svelte";

	let currentTime;
	let now = new Date();
	const options = {
		weekday: "short",
		year: "numeric",
		month: "long",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		timeZoneName: "short",
		timeZone: "Etc/GMT",
	};

	onMount(() => {
		interval = setInterval(() => {
			now = new Date();
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});

	const formattedTime = (date) => date.toLocaleString("en-GB", options);
</script>

<p class="text-center text-sm text-border">{formattedTime(now)}</p>