import Bot from "./Bot.mjs";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup.mjs";
import InputMessageContent from "./InputMessageContent.mjs";
import String from "./String.mjs";

export default class InlineQueryResultCachedSticker extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            id,
            sticker_file_id,
            reply_markup,
            input_message_content,
        } = _value;
        this.type = String(type);
        this.id = String(id);
        this.sticker_file_id = String(sticker_file_id);
        if (reply_markup != null) {
            this.reply_markup = new InlineKeyboardMarkup(reply_markup, _token);
        }
        if (input_message_content != null) {
            this.input_message_content = InputMessageContent(input_message_content, _token);
        }
    }
}
