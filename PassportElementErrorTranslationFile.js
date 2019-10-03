"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes. */
class PassportElementErrorTranslationFile extends _internals_js_1.PassportElementError {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
exports.PassportElementErrorTranslationFile = PassportElementErrorTranslationFile;
