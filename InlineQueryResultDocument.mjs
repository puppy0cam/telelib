import Bot from "./Bot.mjs";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup.mjs";
import InputMessageContent from "./InputMessageContent.mjs";
import Integer from "./Integer.mjs";
import String from "./String.mjs";

export default class InlineQueryResultDocument extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            id,
            title,
            caption,
            parse_mode,
            document_url,
            mime_type,
            description,
            reply_markup,
            input_message_content,
            thumb_url,
            thumb_width,
            thumb_height,
        } = _value;
        this.type = String(type);
        this.id = String(id);
        this.title = String(title);
        if (caption != null) {
            this.caption = String(caption);
        }
        if (parse_mode != null) {
            this.parse_mode = String(parse_mode);
        }
        this.document_url = String(document_url);
        this.mime_type = String(mime_type);
        if (description != null) {
            this.description = String(description);
        }
        if (reply_markup != null) {
            this.reply_markup = new InlineKeyboardMarkup(reply_markup, _token);
        }
        if (input_message_content != null) {
            this.input_message_content = InputMessageContent(input_message_content, _token);
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
