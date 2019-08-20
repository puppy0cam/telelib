import Bot from "./Bot.js";
import Float_number from "./Float number.js";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup.js";
import InputMessageContent from "./InputMessageContent.js";
import Integer from "./Integer.js";
import String from "./String.js";

export default class InlineQueryResultLocation extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            id,
            latitude,
            longitude,
            title,
            live_period,
            reply_markup,
            input_message_content,
            thumb_url,
            thumb_width,
            thumb_height,
        } = _value;
        this.type = String(type);
        this.id = String(id);
        this.latitude = Float_number(latitude);
        this.longitude = Float_number(longitude);
        this.title = String(title);
        if (live_period != null) {
            this.live_period = Integer(live_period);
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
