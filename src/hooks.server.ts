import { handleAuthjs } from '$lib/server/handleAuthjs';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handleCustomized: Handle = async ({ event, resolve }) => {
	return resolve(event);
};

export const handle = sequence(handleAuthjs, handleCustomized);
