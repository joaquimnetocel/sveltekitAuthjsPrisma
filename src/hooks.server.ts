import { GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET } from '$env/static/private';
import { prismaClient } from '$lib/server/prismaClient';
import type { Adapter } from '@auth/core/adapters';
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import { SvelteKitAuth } from '@auth/sveltekit';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const { handle: handleAuthjs } = SvelteKitAuth({
	adapter: PrismaAdapter(prismaClient) as Adapter,
	session: {
		strategy: 'database',
		generateSessionToken: () => {
			return crypto.randomUUID(); // generate a uuid
		},
	},
	providers: [
		GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
		Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET }),
	],
});

export const handleCustomized: Handle = async ({ event, resolve }) => {
	return resolve(event);
};

export const handle = sequence(handleAuthjs, handleCustomized);
