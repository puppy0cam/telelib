"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/** This object represents one button of an inline keyboard. You **must** use exactly one of the optional fields. */
class InlineKeyboardButton extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.login_url) {
            this.login_url = new _internals_js_1.LoginUrl(this.login_url, this);
        }
        if (this.callback_game) {
            this.callback_game = new _internals_js_1.CallbackGame(this.callback_game, this);
        }
    }
}
exports.InlineKeyboardButton = InlineKeyboardButton;
