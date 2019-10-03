"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** Contains information about Telegram Passport data shared with the bot by the user. */
class PassportData extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.data) {
            this.data = _internals_js_1.Array_of_EncryptedPassportElement(this.data, this);
        }
        if (this.credentials) {
            this.credentials = new _internals_js_1.EncryptedCredentials(this.credentials, this);
        }
    }
}
exports.PassportData = PassportData;
