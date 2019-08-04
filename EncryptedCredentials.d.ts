import String from "./String";

/** Contains data required for decrypting and authenticating [EncryptedPassportElement](https://core.telegram.org/bots/api#encryptedpassportelement). See the [Telegram Passport Documentation](https://core.telegram.org/passport#receiving-information) for a complete description of the data decryption and authentication processes. */
export default class EncryptedCredentials implements IEncryptedCredentials {
    constructor(data: IEncryptedCredentials | EncryptedCredentials, token?: string);
    public data: String;
    public hash: String;
    public secret: String;
}

export interface IEncryptedCredentials {
    /** Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for [EncryptedPassportElement](https://core.telegram.org/bots/api#encryptedpassportelement) decryption and authentication */
    data: String;
    /** Base64-encoded data hash for data authentication */
    hash: String;
    /** Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption */
    secret: String;
}
