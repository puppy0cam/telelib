"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/**
 * This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the [Telegram Login Widget](https://core.telegram.org/widgets/login) when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:
 *
 * ![TITLE](https://core.telegram.org/file/811140015/1734/8VZFkwWXalM.97872/6127fa62d8a0bf2b3c)
 * >Sample bot: [@discussbot](https://t.me/discussbot)
 */
class LoginUrl extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
exports.LoginUrl = LoginUrl;
