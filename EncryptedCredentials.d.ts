import { Bot } from "./_internals.js";
/** Contains data required for decrypting and authenticating [EncryptedPassportElement](https://core.telegram.org/bots/api#encryptedpassportelement). See the [Telegram Passport Documentation](https://core.telegram.org/passport#receiving-information) for a complete description of the data decryption and authentication processes. */
export declare class EncryptedCredentials extends Bot implements IEncryptedCredentials {
    constructor(data: IEncryptedCredentials, token?: string | Bot);
    data: string;
    hash: string;
    secret: string;
}
/** Contains data required for decrypting and authenticating [EncryptedPassportElement](https://core.telegram.org/bots/api#encryptedpassportelement). See the [Telegram Passport Documentation](https://core.telegram.org/passport#receiving-information) for a complete description of the data decryption and authentication processes. */
export interface IEncryptedCredentials {
    /** Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for [EncryptedPassportElement](https://core.telegram.org/bots/api#encryptedpassportelement) decryption and authentication */
    data: string;
    /** Base64-encoded data hash for data authentication */
    hash: string;
    /** Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption */
    secret: string;
}
