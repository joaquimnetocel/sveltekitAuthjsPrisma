<script lang="ts">
	import SignButton from '$lib/components/SignButton.svelte';
	import type { PageData } from '../logado/$types';

	const { data }: { data: PageData } = $props();
</script>

{#if data.user}
	<h1>VOCÊ ESTÁ LOGADO!</h1>
	<div>
		<img src={data.user.image} alt="FALHA AO PEGAR A IMAGEM!" />
	</div>
	<div>
		WELCOME, {data.user.name}!
	</div>
	<div>
		<SignButton propRedirect="/" />
	</div>
{/if}
