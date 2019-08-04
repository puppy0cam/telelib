import String from "./String.js";
import User from "./User.js";
import Location from "./Location.js";
import Bot from "./Bot.js";

export default class ChosenInlineResult extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            result_id,
            from,
            location,
            inline_message_id,
            query,
        } = _value;
        this.result_id = String(result_id);
        this.from = new User(from, _token);
        if (location != null) {
            this.location = new Location(location, _token);
        }
        if (inline_message_id != null) {
            this.inline_message_id = String(inline_message_id);
        }
        this.query = String(query);
    }
}
