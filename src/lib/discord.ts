import { createSupabaseClient } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import { type } from "arktype";
import type { AstroCookies } from "astro";

const DiscordMetadata = type({
	avatar_url: "string",
	custom_claims: {
		global_name: "string | null",
	},
	email: "string | undefined",
	email_verified: "boolean",
	full_name: "string",
});
export type DiscordMetadata = typeof DiscordMetadata.infer;

interface DiscordUser extends User {
	username: string;
	full_name: string;
	avatar_url: string | null;
}

export function getDiscordUsername(metadata: DiscordMetadata) {
	return metadata.custom_claims?.global_name || metadata.full_name;
}

export async function getDiscordUser(request: Request, cookies: AstroCookies) {
	const supabase = createSupabaseClient(request, cookies);
	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();

	if (error || !user) {
		const message = "Error fetching user: " + error;
		console.error(message);
		return { error: message, user: null };
	}

	// Process metadata
	console.log(user);
	const metadata = DiscordMetadata(user.user_metadata);
	if (metadata instanceof type.errors) {
		console.error(metadata.summary);
		return { error: metadata.summary, user: null };
	} else {
		const discord_user = user as DiscordUser;
		discord_user.username = getDiscordUsername(metadata);
		discord_user.full_name = metadata.full_name;
		discord_user.avatar_url = metadata.avatar_url;
		return { error: null, user: discord_user };
	}
}
