import { VerifyAltchaPayload } from "@/services/altcha";
import { handleResendErrorResponse } from "@/services/resend";
import { NewsletterSignupSchema } from "@/utilities/schemas";
import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const newsletter = {
	signup: defineAction({
		accept: "form",
		input: NewsletterSignupSchema,
		handler: async ({ altcha, website, email, topics }) => {
			try {
				// Honeypot
				if (website) {
					return "Subscribed";
				}

				// Bot verification check
				await VerifyAltchaPayload(altcha);

				const contact = await resend.contacts.create({
					email: email,
					segments: [
						{
							id: import.meta.env.NEWSLETTER_SEGMENT_ID,
						},
					],
					topics: topics.map((id) => ({
						id: id,
						subscription: "opt_in",
					})),
				});

				handleResendErrorResponse(contact?.error);
				return "Subscribed to newsletter!";
			} catch (error) {
				throw new ActionError({
					code: "INTERNAL_SERVER_ERROR",
					message: "An unknown error occurred. Please try again later.",
				});
			}
		},
	}),
};
