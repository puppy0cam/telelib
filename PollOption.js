import String from "./String.js";
import Integer from "./Integer.js";
import Bot from "./Bot.js";

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
