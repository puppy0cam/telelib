import String from "./String.js";
import Integer from "./Integer.js";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup.js";
import InputMessageContent from "./InputMessageContent.js";
import Bot from "./Bot.js";

export default class InlineQueryResultGif extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            id,
            gif_url,
            gif_width,
            gif_height,
            gif_duration,
            thumb_url,
            title,
            caption,
            parse_mode,
            reply_markup,
            input_message_content,
        } = _value;
        this.type = String(type);
        this.id = String(id);
        this.gif_url = String(gif_url);
        if (gif_width != null) {
            this.gif_width = Integer(gif_width);
        }
        if (gif_height != null) {
            this.gif_height = Integer(gif_height);
        }
        if (gif_duration != null) {
            this.gif_duration = Integer(gif_duration);
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
