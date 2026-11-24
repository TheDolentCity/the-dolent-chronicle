import { createSupabaseClient } from "@/lib/supabase";
import { type APIRoute } from "astro";

export const prerender = false;
export const GET: APIRoute = async ({ request, cookies, redirect }) => {
	const requestUrl = new URL(request.url);
	console.log(requestUrl);
	const code = requestUrl.searchParams.get("code");
	const next = requestUrl.searchParams.get("next") || "/";
	console.log(requestUrl.searchParams);
	console.log(JSON.stringify(requestUrl.searchParams, null, 2));
	console.log(code);
	console.log(next);

	if (code) {
		const supabase = createSupabaseClient(request, cookies);
		console.log("callback");

		const { error } = await supabase.auth.exchangeCodeForSession(code);
		console.log(error);

		if (!error) {
			return redirect(next);
		} else {
			// return the user to an error page with instructions
			return redirect(`/500?error=${error}`);
		}
	}

	// return the user to an error page with instructions
	return redirect(
		`/500?error=${"Authentication callback from Discord failed."}`,
	);
};
