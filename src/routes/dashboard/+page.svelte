<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

{#if data.session}
	<h1>Dashboard</h1>
	Welcome back, {data.session.user?.name}!
{/if}
