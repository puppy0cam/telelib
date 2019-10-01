import { Bot, File } from "./_internals.js";

/** This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB. */
export class PassportFile extends File implements IPassportFile {
    constructor(data: IPassportFile, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.file_date) {
            this.file_date = new Date(this.file_date.valueOf() < 9999999999 ? this.file_date.valueOf() * 1000 : this.file_date)
        }
    }
    public file_id!: string;
    public file_size?: number;
    public file_date?: Date;
}

/** This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB. */
export interface IPassportFile {
    /** Unique identifier for this file */
    file_id: string;
    /** File size */
    file_size?: number;
    /** Unix time when the file was uploaded */
    file_date?: Date | number;
}
