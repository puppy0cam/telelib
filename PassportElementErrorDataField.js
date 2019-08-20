import Bot from "./Bot.js";
import String from "./String.js";

export default class PassportElementErrorDataField extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            source,
            type,
            field_name,
            data_hash,
            message,
        } = _value;
        this.source = String(source);
        this.type = String(type);
        this.field_name = String(field_name);
        this.data_hash = String(data_hash);
        this.message = String(message);
    }
}
