import String from "./String.js";
import Integer from "./Integer.js";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup.js";
import InputMessageContent from "./InputMessageContent.js";
import Bot from "./Bot.js";

export default class InlineQueryResultMpeg4Gif extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            id,
            mpeg4_url,
            mpeg4_width,
            mpeg4_height,
            mpeg4_duration,
            thumb_url,
            title,
            caption,
            parse_mode,
            reply_markup,
            input_message_content,
        } = _value;
        this.type = String(type);
        this.id = String(id);
        this.mpeg4_url = String(mpeg4_url);
        if (mpeg4_width != null) {
            this.mpeg4_width = Integer(mpeg4_width);
        }
        if (mpeg4_height != null) {
            this.mpeg4_height = Integer(mpeg4_height);
        }
        if (mpeg4_duration != null) {
            this.mpeg4_duration = Integer(mpeg4_duration);
        }
        this.thumb_url = String(thumb_url);
        if (title != null) {
            this.title = String(title);
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
