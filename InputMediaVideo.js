import String from "./String.js";
import InputFile_or_String from "./InputFile or String.js";
import Integer from "./Integer.js";
import Boolean from "./Boolean.js";
import Bot from "./Bot.js";

export default class InputMediaVideo extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            media,
            thumb,
            caption,
            parse_mode,
            width,
            height,
            duration,
            supports_streaming,
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
        if (width != null) {
            this.width = Integer(width);
        }
        if (height != null) {
            this.height = Integer(height);
        }
        if (duration != null) {
            this.duration = Integer(duration);
        }
        if (supports_streaming != null) {
            this.supports_streaming = Boolean(supports_streaming);
        }
    }
}
