import String from "./String";

/** Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes. */
export default class PassportElementErrorTranslationFile implements IPassportElementErrorTranslationFile {
    constructor(data: IPassportElementErrorTranslationFile | PassportElementErrorTranslationFile, token?: string);
    public source: String;
    public type: String;
    public file_hash: String;
    public message: String;
}

export interface IPassportElementErrorTranslationFile {
    /** Error source, must be *translation_file* */
    source: String;
    /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: String;
    /** Base64-encoded file hash */
    file_hash: String;
    /** Error message */
    message: String;
}
