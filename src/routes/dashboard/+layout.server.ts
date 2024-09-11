import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ locals, url }) => {
	const session = await locals.auth();
	const fromUrl = url.pathname + url.search;
	if (!session?.user) {
		throw redirect(303, `/login?redirectTo=${fromUrl}`);
	}
	return {
		session,
	};
};
