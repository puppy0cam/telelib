import { Bot, EncryptedPassportElement, IEncryptedPassportElement, EncryptedCredentials, IEncryptedCredentials } from "./_internals.js";
/** Contains information about Telegram Passport data shared with the bot by the user. */
export declare class PassportData extends Bot implements IPassportData {
    constructor(data: IPassportData, token?: string | Bot);
    data: EncryptedPassportElement[];
    credentials: EncryptedCredentials;
}
/** Contains information about Telegram Passport data shared with the bot by the user. */
export interface IPassportData {
    /** Array with information about documents and other Telegram Passport elements that was shared with the bot */
    data: IEncryptedPassportElement[];
    /** Encrypted credentials required to decrypt the data */
    credentials: IEncryptedCredentials;
}
