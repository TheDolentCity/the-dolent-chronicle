import { z } from "astro/zod";

export const TopicSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().max(200).nullable(),
  defaultSubscription: z.enum(["opt_in", "opt_out"]),
  createdAt: z.date(),
});

export const NewsletterSignupSchema = z.object({
  website: z.string().nullable(),
  email: z.string().email(),
  topics: z
    .array(z.string())
    .min(1, { message: "Please select at least one topic." }),
});
