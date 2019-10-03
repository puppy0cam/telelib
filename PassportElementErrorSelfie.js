import { PassportElementError } from "./_internals.js";
/** Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes. */
export class PassportElementErrorSelfie extends PassportElementError {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
