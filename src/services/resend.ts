import { ActionError } from "astro:actions";
import type { ErrorResponse } from "resend";

export function handleResendErrorResponse(error: ErrorResponse | null) {
	// Check for 400 level errors
	if (error?.statusCode && error.statusCode.toString()[0] == "4") {
		throw new ActionError({
			code: "BAD_REQUEST",
			message: error.message,
		});
	}

	// Assume all other errors are 500
	if (error?.statusCode) {
		throw new ActionError({
			code: "INTERNAL_SERVER_ERROR",
			message: error?.message,
		});
	}
}
