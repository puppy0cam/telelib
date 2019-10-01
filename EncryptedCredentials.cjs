"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/** Contains data required for decrypting and authenticating [EncryptedPassportElement](https://core.telegram.org/bots/api#encryptedpassportelement). See the [Telegram Passport Documentation](https://core.telegram.org/passport#receiving-information) for a complete description of the data decryption and authentication processes. */
class EncryptedCredentials extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
exports.EncryptedCredentials = EncryptedCredentials;
