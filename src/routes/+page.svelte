<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>HOME PAGE</h1>
{#if $page.data.session}
	<div>
		WELCOME BACK, {$page.data.session.user?.name}!
	</div>
{/if}
