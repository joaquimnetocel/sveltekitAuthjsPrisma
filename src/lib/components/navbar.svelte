<script lang="ts">
	import { page } from '$app/stores';
	import AuthButton from '$lib/components/authbutton.svelte';

	const links = [{ name: 'Dashboard', href: '/dashboard' }];
</script>

<a href="/">HOME</a>
<div>
	{#if $page.data.session}
		<img src={$page.data.session.user?.image} alt={$page.data.session.user?.name} />
		{$page.data.session.user?.name}
		{#each links as link (link.href)}
			<a href={link.href} class="w-full">{link.name}</a>
		{/each}
		<AuthButton />
	{:else}
		<AuthButton />
	{/if}
</div>
