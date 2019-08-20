import Bot from "./Bot.js";
import Integer from "./Integer.js";
import String from "./String.js";

export default class PollOption extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            text,
            voter_count,
        } = _value;
        this.text = String(text);
        this.voter_count = Integer(voter_count);
    }
}
