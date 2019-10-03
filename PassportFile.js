import { File } from "./_internals.js";
/** This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB. */
export class PassportFile extends File {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.file_date) {
            this.file_date = new Date(this.file_date.valueOf() < 9999999999 ? this.file_date.valueOf() * 1000 : this.file_date);
        }
    }
}
