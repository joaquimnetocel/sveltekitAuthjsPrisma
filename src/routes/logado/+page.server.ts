import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url }) => {
	const session = await locals.auth();
	console.log(session);
	if (!session?.user) {
		throw redirect(303, `/login?redirectTo=${url.pathname}${url.search}`);
	}
	return {
		user: session.user
	};
};
