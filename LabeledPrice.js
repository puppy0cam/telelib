import Bot from "./Bot.js";
import Integer from "./Integer.js";
import String from "./String.js";

export default class LabeledPrice extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            label,
            amount,
        } = _value;
        this.label = String(label);
        this.amount = Integer(amount);
    }
}
