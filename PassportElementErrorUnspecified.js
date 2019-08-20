import Bot from "./Bot.js";
import String from "./String.js";

export default class PassportElementErrorUnspecified extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            source,
            type,
            element_hash,
            message,
        } = _value;
        this.source = String(source);
        this.type = String(type);
        this.element_hash = String(element_hash);
        this.message = String(message);
    }
}
