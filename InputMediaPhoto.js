import String from "./String.js";
import Bot from "./Bot.js";

export default class InputMediaPhoto extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            media,
            caption,
            parse_mode,
        } = _value;
        this.type = String(type);
        this.media = String(media);
        if (caption != null) {
            this.caption = String(caption);
        }
        if (parse_mode != null) {
            this.parse_mode = String(parse_mode);
        }
    }
}
