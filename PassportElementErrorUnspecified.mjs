import { PassportElementError } from "./_internals.mjs";
/** Represents an issue in an unspecified place. The error is considered resolved when new data is added. */
export class PassportElementErrorUnspecified extends PassportElementError {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
