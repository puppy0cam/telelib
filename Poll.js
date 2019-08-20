import Array_of_PollOption from "./Array of PollOption.js";
import Boolean from "./Boolean.js";
import Bot from "./Bot.js";
import String from "./String.js";

export default class Poll extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            id,
            question,
            options,
            is_closed,
        } = _value;
        this.id = String(id);
        this.question = String(question);
        this.options = Array_of_PollOption(options, _token);
        this.is_closed = Boolean(is_closed);
    }
}
