// ADICIONADO POR MIM (CONFIGURAÇÃO DO PRISMA)
import type { PrismaClient } from '@prisma/client';
/////

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	// ADICIONADO POR MIM (CONFIGURAÇÃO DO PRISMA)
	// eslint-disable-next-line no-var
	var prismaClient: PrismaClient;
	/////
}

export {};
