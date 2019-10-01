import { PassportElementError } from "./_internals.mjs";
/** Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes. */
export class PassportElementErrorFrontSide extends PassportElementError {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
