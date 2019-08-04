import String from "./String";
import Array_of_String from "./Array of String";

/** Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes. */
export default class PassportElementErrorFiles implements IPassportElementErrorFiles {
    constructor(data: IPassportElementErrorFiles | PassportElementErrorFiles, token?: string);
    public source: String;
    public type: String;
    public file_hashes: Array_of_String;
    public message: String;
}

export interface IPassportElementErrorFiles {
    /** Error source, must be *files* */
    source: String;
    /** The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: String;
    /** List of base64-encoded file hashes */
    file_hashes: Array_of_String;
    /** Error message */
    message: String;
}
