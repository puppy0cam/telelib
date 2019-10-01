import { PassportElementError } from "./_internals.mjs";
/** Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes. */
export class PassportElementErrorFiles extends PassportElementError {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
