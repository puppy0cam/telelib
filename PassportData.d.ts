import EncryptedPassportElement from "./EncryptedPassportElement";
import EncryptedCredentials from "./EncryptedCredentials";

/** Contains information about Telegram Passport data shared with the bot by the user. */
export default class PassportData implements IPassportData {
    constructor(data: IPassportData | PassportData, token?: string);
    public data: EncryptedPassportElement;
    public credentials: EncryptedCredentials;
}

export interface IPassportData {
    /** Array with information about documents and other Telegram Passport elements that was shared with the bot */
    data: EncryptedPassportElement;
    /** Encrypted credentials required to decrypt the data */
    credentials: EncryptedCredentials;
}
