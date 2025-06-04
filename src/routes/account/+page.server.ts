// src/routes/account/+page.server.ts
import { redirect } from '@sveltejs/kit'

export const load = async () => {
  throw redirect(303, '/')
}
