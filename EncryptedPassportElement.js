import { Bot, PassportFile, Array_of_PassportFile } from "./_internals.js";
/** Contains information about documents or other Telegram Passport elements shared with the bot by the user. */
export class EncryptedPassportElement extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.files) {
            this.files = Array_of_PassportFile(this.files, this);
        }
        if (this.front_side) {
            this.front_side = new PassportFile(this.front_side, this);
        }
        if (this.reverse_side) {
            this.reverse_side = new PassportFile(this.reverse_side, this);
        }
        if (this.selfie) {
            this.selfie = new PassportFile(this.selfie, this);
        }
        if (this.translation) {
            this.translation = Array_of_PassportFile(this.translation, this);
        }
    }
}
