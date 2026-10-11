import type { APIRoute } from "astro";
import { createChallenge, randomInt } from "altcha-lib";
import { deriveKey } from "altcha-lib/algorithms/pbkdf2";

export const GET: APIRoute = async () => {
	console.log("GET altcha-challenge");
	const hmacKey = import.meta.env.ALTCHA_HMAC_SECRET;
	if (!hmacKey) {
		return new Response(
			JSON.stringify({ error: "Missing ALTCHA_HMAC_SECRET configuration" }),
			{
				status: 500,
			},
		);
	}
	return new Response(JSON.stringify({}), {
		headers: { "Content-Type": "application/json" },
	});

	const challenge = await createChallenge({
		algorithm: "PBKDF2/SHA-256",
		cost: 5000, // Complexity of the puzzle
		counter: randomInt(5000, 10000), // Generates a random start point for the proof
		deriveKey, // Passes the imported key function
		expiresAt: new Date(Date.now() + 10 * 60 * 1000), // Valid for 10 minutes
		hmacSignatureSecret: hmacKey,
		hmacKeySignatureSecret: hmacKey,
	});
	console.log(challenge);

	return new Response(JSON.stringify(challenge), {
		headers: { "Content-Type": "application/json" },
	});
};
