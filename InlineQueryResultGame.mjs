import Bot from "./Bot.mjs";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup.mjs";
import String from "./String.mjs";

export default class InlineQueryResultGame extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            id,
            game_short_name,
            reply_markup,
        } = _value;
        this.type = String(type);
        this.id = String(id);
        this.game_short_name = String(game_short_name);
        if (reply_markup != null) {
            this.reply_markup = new InlineKeyboardMarkup(reply_markup, _token);
        }
    }
}
