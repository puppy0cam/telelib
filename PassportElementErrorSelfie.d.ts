import { Bot, IPassportElementError, PassportElementError } from "./_internals.js";
/** Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes. */
export declare class PassportElementErrorSelfie extends PassportElementError implements IPassportElementErrorSelfie {
    constructor(data: IPassportElementErrorSelfie, token?: string | Bot);
    source: "selfie";
    type: "passport" | "driver_license" | "identity_card" | "internal_passport";
    file_hash: string;
    message: string;
}
/** Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes. */
export interface IPassportElementErrorSelfie extends IPassportElementError {
    /** Error source, must be *selfie* */
    source: "selfie";
    /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” */
    type: "passport" | "driver_license" | "identity_card" | "internal_passport";
    /** Base64-encoded hash of the file with the selfie */
    file_hash: string;
    /** Error message */
    message: string;
}
