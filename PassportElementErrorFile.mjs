import { PassportElementError } from "./_internals.mjs";
/** Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes. */
export class PassportElementErrorFile extends PassportElementError {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
