import { Bot, IPassportElementError, PassportElementError } from "./_internals.js";
/** Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change. */
export declare class PassportElementErrorTranslationFiles extends PassportElementError implements IPassportElementErrorTranslationFiles {
    constructor(data: IPassportElementErrorTranslationFiles, token?: string | Bot);
    source: "translation_files";
    type: "passport" | "driver_license" | "identity_card" | "internal_passport" | "utility_bill" | "bank_statement" | "rental_agreement" | "passport_registration" | "temporary_registration";
    file_hashes: string[];
    message: string;
}
/** Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change. */
export interface IPassportElementErrorTranslationFiles extends IPassportElementError {
    /** Error source, must be *translation_files* */
    source: "translation_files";
    /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: "passport" | "driver_license" | "identity_card" | "internal_passport" | "utility_bill" | "bank_statement" | "rental_agreement" | "passport_registration" | "temporary_registration";
    /** List of base64-encoded file hashes */
    file_hashes: string[];
    /** Error message */
    message: string;
}
