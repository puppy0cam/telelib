import Bot from "./Bot.js";
import Float from "./Float.js";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup.js";
import InputMessageContent from "./InputMessageContent.js";
import Integer from "./Integer.js";
import String from "./String.js";

export default class InlineQueryResultVenue extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            id,
            latitude,
            longitude,
            title,
            address,
            foursquare_id,
            foursquare_type,
            reply_markup,
            input_message_content,
            thumb_url,
            thumb_width,
            thumb_height,
        } = _value;
        this.type = String(type);
        this.id = String(id);
        this.latitude = Float(latitude);
        this.longitude = Float(longitude);
        this.title = String(title);
        this.address = String(address);
        if (foursquare_id != null) {
            this.foursquare_id = String(foursquare_id);
        }
        if (foursquare_type != null) {
            this.foursquare_type = String(foursquare_type);
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
