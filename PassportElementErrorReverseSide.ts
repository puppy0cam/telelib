import { Bot, IPassportElementError, PassportElementError } from "./_internals.js";

/** Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes. */
export class PassportElementErrorReverseSide extends PassportElementError implements IPassportElementErrorReverseSide {
    public constructor(data: IPassportElementErrorReverseSide, token?: string | Bot) {
        "use strict";
        super(data, token);
    }
    public source!: "reverse_side";
    public type!: "driver_license" | "identity_card";
    public file_hash!: string;
    public message!: string;
}

/** Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes. */
export interface IPassportElementErrorReverseSide extends IPassportElementError {
    /** Error source, must be *reverse_side* */
    source: "reverse_side";
    /** The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card” */
    type: "driver_license" | "identity_card";
    /** Base64-encoded hash of the file with the reverse side of the document */
    file_hash: string;
    /** Error message */
    message: string;
}
