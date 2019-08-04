import String from "./String.js";
import Bot from "./Bot.js";

export default class InputContactMessageContent extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            phone_number,
            first_name,
            last_name,
            vcard,
        } = _value;
        this.phone_number = String(phone_number);
        this.first_name = String(first_name);
        if (last_name != null) {
            this.last_name = String(last_name);
        }
        if (vcard != null) {
            this.vcard = String(vcard);
        }
    }
}
