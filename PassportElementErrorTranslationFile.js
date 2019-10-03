import { PassportElementError } from "./_internals.js";
/** Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes. */
export class PassportElementErrorTranslationFile extends PassportElementError {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
