import String from "./String";

/** Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes. */
export default class PassportElementErrorFile implements IPassportElementErrorFile {
    constructor(data: IPassportElementErrorFile | PassportElementErrorFile, token?: string);
    public source: String;
    public type: String;
    public file_hash: String;
    public message: String;
}

export interface IPassportElementErrorFile {
    /** Error source, must be file */
    source: String;
    /** The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: String;
    /** Base64-encoded file hash */
    file_hash: String;
    /** Error message */
    message: String;
}
