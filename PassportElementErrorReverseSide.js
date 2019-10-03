"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes. */
class PassportElementErrorReverseSide extends _internals_js_1.PassportElementError {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
exports.PassportElementErrorReverseSide = PassportElementErrorReverseSide;
