import { PassportElementError } from "./_internals.mjs";
/** Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes. */
export class PassportElementErrorReverseSide extends PassportElementError {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
