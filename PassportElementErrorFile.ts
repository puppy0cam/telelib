import { Bot, IPassportElementError, PassportElementError } from "./_internals.js";

/** Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes. */
export class PassportElementErrorFile extends PassportElementError implements IPassportElementErrorFile {
    public constructor(data: IPassportElementErrorFile, token?: string | Bot) {
        "use strict";
        super(data, token);
    }
    public source!: "file";
    public type!: "utility_bill" | "bank_statement" | "rental_agreement" | "passport_registration" | "temporary_registration";
    public file_hash!: string;
    public message!: string;
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
