import String from "./String.js";
import Boolean from "./Boolean.js";
import Bot from "./Bot.js";

export default class KeyboardButtonObject extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            text,
            request_contact,
            request_location,
        } = _value;
        this.text = String(text);
        if (request_contact != null) {
            this.request_contact = Boolean(request_contact);
        }
        if (request_location != null) {
            this.request_location = Boolean(request_location);
        }
    }
}
