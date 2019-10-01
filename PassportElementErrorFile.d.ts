import { Bot, IPassportElementError, PassportElementError } from "./_internals.js";
/** Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes. */
export declare class PassportElementErrorFile extends PassportElementError implements IPassportElementErrorFile {
    constructor(data: IPassportElementErrorFile, token?: string | Bot);
    source: "file";
    type: "utility_bill" | "bank_statement" | "rental_agreement" | "passport_registration" | "temporary_registration";
    file_hash: string;
    message: string;
}
/** Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes. */
export interface IPassportElementErrorFile extends IPassportElementError {
    /** Error source, must be file */
    source: "file";
    /** The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: "utility_bill" | "bank_statement" | "rental_agreement" | "passport_registration" | "temporary_registration";
    /** Base64-encoded file hash */
    file_hash: string;
    /** Error message */
    message: string;
}
