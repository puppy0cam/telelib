import { Bot } from "./_internals.js";
/** Contains data required for decrypting and authenticating [EncryptedPassportElement](https://core.telegram.org/bots/api#encryptedpassportelement). See the [Telegram Passport Documentation](https://core.telegram.org/passport#receiving-information) for a complete description of the data decryption and authentication processes. */
export class EncryptedCredentials extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
