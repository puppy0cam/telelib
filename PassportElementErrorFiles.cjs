"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/** Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes. */
class PassportElementErrorFiles extends _internals_js_1.PassportElementError {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
exports.PassportElementErrorFiles = PassportElementErrorFiles;
