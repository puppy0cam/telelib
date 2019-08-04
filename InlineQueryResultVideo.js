import String from "./String.js";
import Integer from "./Integer.js";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup.js";
import InputMessageContent from "./InputMessageContent.js";
import Bot from "./Bot.js";

export default class InlineQueryResultVideo extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            id,
            video_url,
            mime_type,
            thumb_url,
            title,
            caption,
            parse_mode,
            video_width,
            video_height,
            video_duration,
            description,
            reply_markup,
            input_message_content,
        } = _value;
        this.type = String(type);
        this.id = String(id);
        this.video_url = String(video_url);
        this.mime_type = String(mime_type);
        this.thumb_url = String(thumb_url);
        this.title = String(title);
        if (caption != null) {
            this.caption = String(caption);
        }
        if (parse_mode != null) {
            this.parse_mode = String(parse_mode);
        }
        if (video_width != null) {
            this.video_width = Integer(video_width);
        }
        if (video_height != null) {
            this.video_height = Integer(video_height);
        }
        if (video_duration != null) {
            this.video_duration = Integer(video_duration);
        }
        if (description != null) {
            this.description = String(description);
        }
        if (reply_markup != null) {
            this.reply_markup = new InlineKeyboardMarkup(reply_markup, _token);
        }
        if (input_message_content != null) {
            this.input_message_content = InputMessageContent(input_message_content, _token);
        }
    }
}
