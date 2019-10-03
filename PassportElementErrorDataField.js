"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes. */
class PassportElementErrorDataField extends _internals_js_1.PassportElementError {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
exports.PassportElementErrorDataField = PassportElementErrorDataField;
