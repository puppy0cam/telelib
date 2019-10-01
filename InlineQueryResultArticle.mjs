import Boolean from "./Boolean.mjs";
import Bot from "./Bot.mjs";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup.mjs";
import InputMessageContent from "./InputMessageContent.mjs";
import Integer from "./Integer.mjs";
import String from "./String.mjs";

export default class InlineQueryResultArticle extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            id,
            title,
            input_message_content,
            reply_markup,
            url,
            hide_url,
            description,
            thumb_url,
            thumb_width,
            thumb_height,
        } = _value;
        this.type = String(type);
        this.id = String(id);
        this.title = String(title);
        this.input_message_content = InputMessageContent(input_message_content, _token);
        if (reply_markup != null) {
            this.reply_markup = new InlineKeyboardMarkup(reply_markup, _token);
        }
        if (url != null) {
            this.url = String(url);
        }
        if (hide_url != null) {
            this.hide_url = Boolean(hide_url);
        }
        if (description != null) {
            this.description = String(description);
        }
        if (thumb_url != null) {
            this.thumb_url = String(thumb_url);
        }
        if (thumb_width != null) {
            this.thumb_width = Integer(thumb_width);
        }
        if (thumb_height != null) {
            this.thumb_height = Integer(thumb_height);
        }
    }
}
