import String from "./String";
import Array_of_String from "./Array of String";

/** Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change. */
export default class PassportElementErrorTranslationFiles implements IPassportElementErrorTranslationFiles {
    constructor(data: IPassportElementErrorTranslationFiles | PassportElementErrorTranslationFiles, token?: string);
    public source: String;
    public type: String;
    public file_hashes: Array_of_String;
    public message: String;
}

export interface IPassportElementErrorTranslationFiles {
    /** Error source, must be *translation_files* */
    source: String;
    /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: String;
    /** List of base64-encoded file hashes */
    file_hashes: Array_of_String;
    /** Error message */
    message: String;
}
