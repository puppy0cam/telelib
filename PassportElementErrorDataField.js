import { PassportElementError } from "./_internals.js";
/** Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes. */
export class PassportElementErrorDataField extends PassportElementError {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
