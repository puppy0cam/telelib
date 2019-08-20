import Boolean from "./Boolean.js";
import Bot from "./Bot.js";
import CallbackGame from "./CallbackGame.js";
import LoginUrl from "./LoginUrl.js";
import String from "./String.js";

export default class InlineKeyboardButton extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            text,
            url,
            login_url,
            callback_data,
            switch_inline_query,
            switch_inline_query_current_chat,
            callback_game,
            pay,
        } = _value;
        this.text = String(text);
        if (url != null) {
            this.url = String(url);
        }
        if (login_url != null) {
            this.login_url = new LoginUrl(login_url, _token);
        }
        if (callback_data != null) {
            this.callback_data = String(callback_data);
        }
        if (switch_inline_query != null) {
            this.switch_inline_query = String(switch_inline_query);
        }
        if (switch_inline_query_current_chat != null) {
            this.switch_inline_query_current_chat = String(switch_inline_query_current_chat);
        }
        if (callback_game != null) {
            this.callback_game = new CallbackGame(callback_game, _token);
        }
        if (pay != null) {
            this.pay = Boolean(pay);
        }
    }
}
