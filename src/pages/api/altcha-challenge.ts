import type { APIRoute } from "astro";
import { createChallenge, randomInt } from "altcha-lib";
import { deriveKey } from "altcha-lib/algorithms/pbkdf2";

export const prerender = false;
export const GET: APIRoute = async () => {
	const hmacKey = import.meta.env.ALTCHA_HMAC_SECRET;
	if (!hmacKey) {
		return Response.json(
			{ error: "Missing ALTCHA_HMAC_SECRET configuration" },
			{
				status: 500,
			},
		);
	}

	try {
		const challenge = await createChallenge({
			algorithm: "PBKDF2/SHA-256",
			cost: 5000,
			counter: randomInt(5000, 10000),
			deriveKey,
			expiresAt: new Date(Date.now() + 10 * 60 * 1000),
			hmacSignatureSecret: hmacKey,
			hmacKeySignatureSecret: hmacKey,
		});

		return Response.json(challenge, {
			status: 200,
		});
	} catch (error: any) {
		return Response.json(
			{ error: "Failed to generate challenge", details: error?.message },
			{ status: 500 },
		);
	}
};
