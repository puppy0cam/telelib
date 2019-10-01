import { Bot, Array_of_EncryptedPassportElement, EncryptedPassportElement, IEncryptedPassportElement, EncryptedCredentials, IEncryptedCredentials } from "./_internals.js";

/** Contains information about Telegram Passport data shared with the bot by the user. */
export class PassportData extends Bot implements IPassportData {
    constructor(data: IPassportData, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.data) {
            this.data = Array_of_EncryptedPassportElement(this.data, this);
        }
        if (this.credentials) {
            this.credentials = new EncryptedCredentials(this.credentials, this);
        }
    }
    public data!: EncryptedPassportElement[];
    public credentials!: EncryptedCredentials;
}

/** Contains information about Telegram Passport data shared with the bot by the user. */
export interface IPassportData {
    /** Array with information about documents and other Telegram Passport elements that was shared with the bot */
    data: IEncryptedPassportElement[];
    /** Encrypted credentials required to decrypt the data */
    credentials: IEncryptedCredentials;
}
