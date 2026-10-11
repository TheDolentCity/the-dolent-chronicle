import { ActionError } from "astro:actions";
import { verifySolution, type Challenge, type Solution } from "altcha-lib";
import { deriveKey } from "altcha-lib/algorithms/pbkdf2";

interface AltchaPayload {
	challenge: Challenge;
	solution: Solution;
}

export async function VerifyAltchaPayload(payload: string) {
	const secret = import.meta.env.ALTCHA_HMAC_SECRET;
	if (!secret) {
		throw new ActionError({
			code: "INTERNAL_SERVER_ERROR",
			message: "Server security configuration error.",
		});
	}

	// Decode the payload for challenge/solution
	const altcha = DecodeAltchaPayload(payload);

	// Verify the solution
	const result = await verifySolution({
		challenge: altcha.challenge,
		solution: altcha.solution,
		deriveKey,
		hmacSignatureSecret: secret,
		hmacKeySignatureSecret: secret,
	});

	if (!result.verified) {
		throw new ActionError({
			code: "BAD_REQUEST",
			message: "Security validation failed or expired. Please try again.",
		});
	}
}

export function DecodeAltchaPayload(payload: string) {
	try {
		return JSON.parse(
			Buffer.from(payload, "base64").toString("utf-8"),
		) as AltchaPayload;
	} catch (error) {
		throw new ActionError({
			code: "INTERNAL_SERVER_ERROR",
			message: "Server security configuration error.",
		});
	}
}
