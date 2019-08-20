import Boolean from "./Boolean.js";
import Bot from "./Bot.js";
import String from "./String.js";

export default class LoginUrl extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            url,
            forward_text,
            bot_username,
            request_write_access,
        } = _value;
        this.url = String(url);
        if (forward_text != null) {
            this.forward_text = String(forward_text);
        }
        if (bot_username != null) {
            this.bot_username = String(bot_username);
        }
        if (request_write_access != null) {
            this.request_write_access = Boolean(request_write_access);
        }
    }
}
