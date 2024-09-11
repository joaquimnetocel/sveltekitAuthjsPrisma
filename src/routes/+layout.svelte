<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import type { Snippet } from 'svelte';

	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

<Navbar />

{@render children()}
