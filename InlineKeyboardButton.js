import { Bot, CallbackGame, LoginUrl } from "./_internals.js";
/** This object represents one button of an inline keyboard. You **must** use exactly one of the optional fields. */
export class InlineKeyboardButton extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.login_url) {
            this.login_url = new LoginUrl(this.login_url, this);
        }
        if (this.callback_game) {
            this.callback_game = new CallbackGame(this.callback_game, this);
        }
    }
}
