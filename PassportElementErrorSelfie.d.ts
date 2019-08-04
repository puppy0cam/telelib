import String from "./String";

/** Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes. */
export default class PassportElementErrorSelfie implements IPassportElementErrorSelfie {
    constructor(data: IPassportElementErrorSelfie | PassportElementErrorSelfie, token?: string);
    public source: String;
    public type: String;
    public file_hash: String;
    public message: String;
}

export interface IPassportElementErrorSelfie {
    /** Error source, must be *selfie* */
    source: String;
    /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” */
    type: String;
    /** Base64-encoded hash of the file with the selfie */
    file_hash: String;
    /** Error message */
    message: String;
}
