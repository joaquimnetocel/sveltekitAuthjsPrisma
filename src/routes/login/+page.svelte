<script lang="ts">
	import { page } from '$app/stores';
	import { signIn } from '@auth/sveltekit/client';

	const redirectUrl = $page.url.searchParams.get('redirectTo') || '/dashboard';

	const githubLogin = async () => {
		if (!$page.data.session) {
			await signIn('github', { callbackUrl: `${redirectUrl}` });
		}
	};

	const googleLogin = async () => {
		if (!$page.data.session) {
			await signIn('google', { callbackUrl: `${redirectUrl}` });
		}
	};
</script>

<button onclick={githubLogin}> Login with GitHub </button>
<button onclick={googleLogin}> Login with Google </button>
