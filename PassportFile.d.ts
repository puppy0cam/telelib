import { Bot, File } from "./_internals.js";
/** This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB. */
export declare class PassportFile extends File implements IPassportFile {
    constructor(data: IPassportFile, token?: string | Bot);
    file_id: string;
    file_size?: number;
    file_date?: Date;
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
