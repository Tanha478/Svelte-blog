import { json } from '@sveltejs/kit';
import { createServerClient } from '@supabase/ssr';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export async function POST({ cookies }) {
	const supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		cookies
	});

	const { error } = await supabase.auth.signOut();

	if (error) {
		return json({ success: false, message: error.message }, { status: 500 });
	}

	return json({ success: true });
}
