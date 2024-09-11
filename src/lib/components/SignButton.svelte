<script lang="ts">
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
</script>

{#if !$page.data.session}
	<a href="/login"> SIGN IN </a>
{:else}
	<button
		onclick={() => {
			signOut({
				callbackUrl: '/',
			});
		}}
	>
		SIGN OUT
	</button>
{/if}
