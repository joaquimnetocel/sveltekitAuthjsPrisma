<script lang="ts">
	import { page } from '$app/state';
	import { signOut } from '@auth/sveltekit/client';

	let {
		propRedirect = `${page.url.pathname}${page.url.search}`,
		propSignIn = 'SIGN IN',
		propSignOut = 'SIGN OUT'
	}: {
		propRedirect?: string;
		propSignIn?: string;
		propSignOut?: string;
	} = $props();
</script>

{#if !page.data.user}
	<a href={`/login?redirectTo=${propRedirect}`}> {propSignIn} </a>
{:else}
	<button
		onclick={() => {
			signOut({
				callbackUrl: `${propRedirect}`
			});
		}}
	>
		{propSignOut}
	</button>
{/if}
