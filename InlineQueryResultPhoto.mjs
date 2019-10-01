import Bot from "./Bot.mjs";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup.mjs";
import InputMessageContent from "./InputMessageContent.mjs";
import Integer from "./Integer.mjs";
import String from "./String.mjs";

export default class InlineQueryResultPhoto extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            id,
            photo_url,
            thumb_url,
            photo_width,
            photo_height,
            title,
            description,
            caption,
            parse_mode,
            reply_markup,
            input_message_content,
        } = _value;
        this.type = String(type);
        this.id = String(id);
        this.photo_url = String(photo_url);
        this.thumb_url = String(thumb_url);
        if (photo_width != null) {
            this.photo_width = Integer(photo_width);
        }
        if (photo_height != null) {
            this.photo_height = Integer(photo_height);
        }
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
