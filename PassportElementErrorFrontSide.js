import Bot from "./Bot.js";
import String from "./String.js";

export default class PassportElementErrorFrontSide extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            source,
            type,
            file_hash,
            message,
        } = _value;
        this.source = String(source);
        this.type = String(type);
        this.file_hash = String(file_hash);
        this.message = String(message);
    }
}
