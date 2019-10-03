"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** Contains information about documents or other Telegram Passport elements shared with the bot by the user. */
class EncryptedPassportElement extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.files) {
            this.files = _internals_js_1.Array_of_PassportFile(this.files, this);
        }
        if (this.front_side) {
            this.front_side = new _internals_js_1.PassportFile(this.front_side, this);
        }
        if (this.reverse_side) {
            this.reverse_side = new _internals_js_1.PassportFile(this.reverse_side, this);
        }
        if (this.selfie) {
            this.selfie = new _internals_js_1.PassportFile(this.selfie, this);
        }
        if (this.translation) {
            this.translation = _internals_js_1.Array_of_PassportFile(this.translation, this);
        }
    }
}
exports.EncryptedPassportElement = EncryptedPassportElement;
