import { PassportElementError } from "./_internals.js";
/** Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change. */
export class PassportElementErrorTranslationFiles extends PassportElementError {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
