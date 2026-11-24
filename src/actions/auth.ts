import { createSupabaseClient } from "@/lib/supabase";
import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";

export const auth = {
	signInDiscord: defineAction({
		accept: "form",
		handler: async (_, context) => {
			try {
				console.log("signInDiscord");
				const supabase = createSupabaseClient(context.request, context.cookies);
				const origin = new URL(context.request.url).origin;
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
					throw new ActionError({
						code: "INTERNAL_SERVER_ERROR",
						message: error?.message ?? "Failed to sign in to Discord",
					});
				}
				return { url: data.url };
			} catch (error) {
				console.error("signInDiscord error:", error);
				throw new ActionError({
					code: "INTERNAL_SERVER_ERROR",
					message: "Failed to sign in with Discord.",
				});
			}
		},
	}),
	signOut: defineAction({
		handler: async (_, context) => {
			try {
				const supabase = createSupabaseClient(Astro.request, Astro.cookies);
				await supabase.auth.signOut();
				return {
					success: true,
				};
			} catch (error) {
				return {
					success: false,
					message: "Failed to sign out.",
				};
			}
		},
	}),
};
