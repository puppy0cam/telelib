import String from "./String.js";
import Boolean from "./Boolean.js";
import Bot from "./Bot.js";

export default class InputTextMessageContent extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            message_text,
            parse_mode,
            disable_web_page_preview,
        } = _value;
        this.message_text = String(message_text);
        if (parse_mode != null) {
            this.parse_mode = String(parse_mode);
        }
        if (disable_web_page_preview != null) {
            this.disable_web_page_preview = Boolean(disable_web_page_preview);
        }
    }
}
