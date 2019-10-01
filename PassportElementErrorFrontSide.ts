import { Bot, IPassportElementError, PassportElementError } from "./_internals.js";

/** Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes. */
export class PassportElementErrorFrontSide extends PassportElementError implements IPassportElementErrorFrontSide {
    public constructor(data: IPassportElementErrorFrontSide, token?: string | Bot) {
        "use strict";
        super(data, token);
    }
    public source!: "front_side";
    public type!: "passport" | "driver_license" | "identity_card" | "internal_passport";
    public file_hash!: string;
    public message!: string;
}

/** Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes. */
export interface IPassportElementErrorFrontSide extends IPassportElementError {
    /** Error source, must be *front_side* */
    source: "front_side";
    /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” */
    type: "passport" | "driver_license" | "identity_card" | "internal_passport";
    /** Base64-encoded hash of the file with the front side of the document */
    file_hash: string;
    /** Error message */
    message: string;
}
