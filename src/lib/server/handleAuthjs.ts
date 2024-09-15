import { GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET } from '$env/static/private';
import { prismaClient } from '$lib/server/prismaClient';
import type { Adapter } from '@auth/core/adapters';
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import { SvelteKitAuth } from '@auth/sveltekit';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const { handle: handleAuthjs } = SvelteKitAuth({
	adapter: PrismaAdapter(prismaClient) as Adapter,
	session: {
		strategy: 'database',
		generateSessionToken: () => {
			return crypto.randomUUID(); // generate a uuid
		},
	},
	providers: [
		GitHub({
			clientId: GITHUB_ID,
			clientSecret: GITHUB_SECRET,
			allowDangerousEmailAccountLinking: true,
		}),
		Google({
			clientId: GOOGLE_ID,
			clientSecret: GOOGLE_SECRET,
			allowDangerousEmailAccountLinking: true,
		}),
	],
	callbacks: {
		signIn: async ({ account, profile }) => {
			if (account?.provider === 'google') {
				return profile?.email_verified ? true : false;
			}
			console.log(profile);
			return true;
		},
	},
});
