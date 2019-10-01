import { Bot, IPassportElementError, PassportElementError } from "./_internals.js";
/** Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes. */
export declare class PassportElementErrorFrontSide extends PassportElementError implements IPassportElementErrorFrontSide {
    constructor(data: IPassportElementErrorFrontSide, token?: string | Bot);
    source: "front_side";
    type: "passport" | "driver_license" | "identity_card" | "internal_passport";
    file_hash: string;
    message: string;
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
