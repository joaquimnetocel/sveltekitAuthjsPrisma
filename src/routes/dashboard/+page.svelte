<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

{#if data.session}
	<h1>DASHBOARD</h1>
	WELCOME BACK, {data.session.user?.name}!
{/if}
