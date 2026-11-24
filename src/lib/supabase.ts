import { createServerClient, parseCookieHeader } from "@supabase/ssr";
import type { AstroCookies } from "astro";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export function createSupabaseClient(request: Request, cookies: AstroCookies) {
	return createServerClient(supabaseUrl, supabasePublishableKey, {
		cookies: {
			getAll() {
				return parseCookieHeader(request.headers.get("Cookie") ?? "");
			},
			setAll(cookiesToSet) {
				cookiesToSet.forEach(({ name, value, options }) =>
					cookies.set(name, value, options),
				);
			},
		},
	});
}

export async function signInWithDiscord(
	request: Request,
	cookies: AstroCookies,
) {
	try {
		console.log("signInDiscord");
		const supabase = createSupabaseClient(request, cookies);
		const origin = new URL(request.url).origin;
		console.log(supabase ? "supabase" : "null");

		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: "discord",
			options: {
				redirectTo: `${origin}/api/auth/callback`,
			},
		});
		console.log(data);
		console.log(error);

		if (error || !data.url) {
			console.error(error);
			return { error: "Failed to sign in to Discord" };
		}
		return { url: data.url };
	} catch (error) {
		console.error(error);
		return { error: "Failed to sign in to Discord" };
	}
}
