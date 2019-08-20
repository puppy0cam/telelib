import Bot from "./Bot.js";
import InputFile_or_String from "./InputFile or String.js";
import Integer from "./Integer.js";
import String from "./String.js";

export default class InputMediaAudio extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            media,
            thumb,
            caption,
            parse_mode,
            duration,
            performer,
            title,
        } = _value;
        this.type = String(type);
        this.media = String(media);
        if (thumb != null) {
            this.thumb = InputFile_or_String(thumb, _token);
        }
        if (caption != null) {
            this.caption = String(caption);
        }
        if (parse_mode != null) {
            this.parse_mode = String(parse_mode);
        }
        if (duration != null) {
            this.duration = Integer(duration);
        }
        if (performer != null) {
            this.performer = String(performer);
        }
        if (title != null) {
            this.title = String(title);
        }
    }
}
