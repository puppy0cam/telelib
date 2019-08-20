import Bot from "./Bot.js";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup.js";
import InputMessageContent from "./InputMessageContent.js";
import String from "./String.js";

export default class InlineQueryResultCachedPhoto extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            id,
            photo_file_id,
            title,
            description,
            caption,
            parse_mode,
            reply_markup,
            input_message_content,
        } = _value;
        this.type = String(type);
        this.id = String(id);
        this.photo_file_id = String(photo_file_id);
        if (title != null) {
            this.title = String(title);
        }
        if (description != null) {
            this.description = String(description);
        }
        if (caption != null) {
            this.caption = String(caption);
        }
        if (parse_mode != null) {
            this.parse_mode = String(parse_mode);
        }
        if (reply_markup != null) {
            this.reply_markup = new InlineKeyboardMarkup(reply_markup, _token);
        }
        if (input_message_content != null) {
            this.input_message_content = InputMessageContent(input_message_content, _token);
        }
    }
}
