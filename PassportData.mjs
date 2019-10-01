import { Bot, Array_of_EncryptedPassportElement, EncryptedCredentials } from "./_internals.mjs";
/** Contains information about Telegram Passport data shared with the bot by the user. */
export class PassportData extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.data) {
            this.data = Array_of_EncryptedPassportElement(this.data, this);
        }
        if (this.credentials) {
            this.credentials = new EncryptedCredentials(this.credentials, this);
        }
    }
}
