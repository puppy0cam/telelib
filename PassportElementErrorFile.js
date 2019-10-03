"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes. */
class PassportElementErrorFile extends _internals_js_1.PassportElementError {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
exports.PassportElementErrorFile = PassportElementErrorFile;
