import String from "./String";

/** Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes. */
export default class PassportElementErrorFrontSide implements IPassportElementErrorFrontSide {
    constructor(data: IPassportElementErrorFrontSide | PassportElementErrorFrontSide, token?: string);
    public source: String;
    public type: String;
    public file_hash: String;
    public message: String;
}

export interface IPassportElementErrorFrontSide {
    /** Error source, must be *front_side* */
    source: String;
    /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” */
    type: String;
    /** Base64-encoded hash of the file with the front side of the document */
    file_hash: String;
    /** Error message */
    message: String;
}
