import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { NewsletterSignupSchema } from "@/utilities/schemas";
import { handleResendErrorResponse } from "@/services/resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const newsletter = {
  getTopics: defineAction({
    accept: "json",
    handler: async () => {
      try {
        const topics = await resend.topics.list();
        handleResendErrorResponse(topics?.error);

        if (!topics?.data) {
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Unknown error.",
          });
        }

        return topics.data.data;
      } catch (error) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "An unknown error occurred. Please try again later.",
        });
      }
    },
  }),
  signup: defineAction({
    accept: "form",
    input: NewsletterSignupSchema,
    handler: async ({ website, email, topics }) => {
      try {
        // Honeypot
        if (website) {
          return "Subscribed";
        }

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
