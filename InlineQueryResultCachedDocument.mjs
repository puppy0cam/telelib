import Bot from "./Bot.mjs";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup.mjs";
import InputMessageContent from "./InputMessageContent.mjs";
import String from "./String.mjs";

export default class InlineQueryResultCachedDocument extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            id,
            title,
            document_file_id,
            description,
            caption,
            parse_mode,
            reply_markup,
            input_message_content,
        } = _value;
        this.type = String(type);
        this.id = String(id);
        this.title = String(title);
        this.document_file_id = String(document_file_id);
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
