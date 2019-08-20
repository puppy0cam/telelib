import Bot from "./Bot.js";
import Integer from "./Integer.js";
import String from "./String.js";
import User from "./User.js";

export default class MessageEntity extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            offset,
            length,
            url,
            user,
        } = _value;
        this.type = String(type);
        this.offset = Integer(offset);
        this.length = Integer(length);
        if (url != null) {
            this.url = String(url);
        }
        if (user != null) {
            this.user = new User(user, _token);
        }
    }
}
