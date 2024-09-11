<script lang="ts">
	import { page } from '$app/stores';
	import SignButton from '$lib/components/SignButton.svelte';
</script>

<a href="/">HOME</a>
<div>
	{#if $page.data.session}
		<img src={$page.data.session.user?.image} alt={$page.data.session.user?.name} />
		<div>
			{$page.data.session.user?.name}
		</div>
		<ul>
			<li>
				<a href="/dashboard">DASHBOARD</a>
			</li>
		</ul>
		<SignButton />
	{:else}
		<SignButton />
	{/if}
</div>
