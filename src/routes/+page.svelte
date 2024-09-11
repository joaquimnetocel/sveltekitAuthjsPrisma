<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>Home Page</h1>
{#if $page.data.session}
	<div>
		Welcome back, {$page.data.session.user?.name}!
	</div>
{/if}
