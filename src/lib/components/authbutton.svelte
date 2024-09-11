<script lang="ts">
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
</script>

{#if !$page.data.session}
	<a href="/login"> Sign in </a>
{:else}
	<button
		onclick={() => {
			signOut({
				callbackUrl: '/',
			});
		}}
	>
		Sign out
	</button>
{/if}
