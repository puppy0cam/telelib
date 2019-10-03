"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** Represents an issue in an unspecified place. The error is considered resolved when new data is added. */
class PassportElementErrorUnspecified extends _internals_js_1.PassportElementError {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
exports.PassportElementErrorUnspecified = PassportElementErrorUnspecified;
