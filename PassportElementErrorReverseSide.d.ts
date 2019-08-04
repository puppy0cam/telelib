import String from "./String";

/** Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes. */
export default class PassportElementErrorReverseSide implements IPassportElementErrorReverseSide {
    constructor(data: IPassportElementErrorReverseSide | PassportElementErrorReverseSide, token?: string);
    public source: String;
    public type: String;
    public file_hash: String;
    public message: String;
}

export interface IPassportElementErrorReverseSide {
    /** Error source, must be *reverse_side* */
    source: String;
    /** The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card” */
    type: String;
    /** Base64-encoded hash of the file with the reverse side of the document */
    file_hash: String;
    /** Error message */
    message: String;
}
