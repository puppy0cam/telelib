import { Bot, IPassportElementError, PassportElementError } from "./_internals.js";
/** Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes. */
export declare class PassportElementErrorTranslationFile extends PassportElementError implements IPassportElementErrorTranslationFile {
    constructor(data: IPassportElementErrorTranslationFile, token?: string | Bot);
    source: "translation_file";
    type: "passport" | "driver_license" | "identity_card" | "internal_passport" | "utility_bill" | "bank_statement" | "rental_agreement" | "passport_registration" | "temporary_registration";
    file_hash: string;
    message: string;
}
/** Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes. */
export interface IPassportElementErrorTranslationFile extends IPassportElementError {
    /** Error source, must be *translation_file* */
    source: "translation_file";
    /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: "passport" | "driver_license" | "identity_card" | "internal_passport" | "utility_bill" | "bank_statement" | "rental_agreement" | "passport_registration" | "temporary_registration";
    /** Base64-encoded file hash */
    file_hash: string;
    /** Error message */
    message: string;
}
