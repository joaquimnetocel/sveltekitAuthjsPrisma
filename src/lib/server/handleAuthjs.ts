import {
	AUTH_GITHUB_ID,
	AUTH_GITHUB_SECRET,
	AUTH_GOOGLE_ID,
	AUTH_GOOGLE_SECRET
} from '$env/static/private';
import { prismaClient } from '$lib/server/prismaClient';
import type { Adapter } from '@auth/core/adapters';
import { SvelteKitAuth } from '@auth/sveltekit';
import Github from '@auth/sveltekit/providers/github';
import Google from '@auth/sveltekit/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const { handle: handleAuthjs } = SvelteKitAuth({
	adapter: PrismaAdapter(prismaClient) as Adapter,
	session: {
		strategy: 'database',
		generateSessionToken: () => {
			return crypto.randomUUID(); // generate a uuid
		}
	},
	providers: [
		Google({
			clientId: AUTH_GOOGLE_ID,
			clientSecret: AUTH_GOOGLE_SECRET,
			allowDangerousEmailAccountLinking: true
		}),
		Github({
			clientId: AUTH_GITHUB_ID,
			clientSecret: AUTH_GITHUB_SECRET,
			allowDangerousEmailAccountLinking: true
		})
	],
	callbacks: {
		async session({ session }) {
			return session;
		},
		signIn: async ({ account, profile }) => {
			if (account?.provider === 'google') {
				return profile?.email_verified ? true : false;
			}
			//console.log(profile);
			return true;
		}
	}
});
