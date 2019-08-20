import Bot from "./Bot.js";
import Integer from "./Integer.js";
import String from "./String.js";

export default class Contact extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            phone_number,
            first_name,
            last_name,
            user_id,
            vcard,
        } = _value;
        this.phone_number = String(phone_number);
        this.first_name = String(first_name);
        if (last_name != null) {
            this.last_name = String(last_name);
        }
        if (user_id != null) {
            this.user_id = Integer(user_id);
        }
        if (vcard != null) {
            this.vcard = String(vcard);
        }
    }
    sendContact(options) {
        "use strict";
        return super.sendContact(Object.assign({
            first_name: this.first_name,
            last_name: this.last_name,
            phone_number: this.phone_number,
            vcard: this.vcard,
        }, options));
    }
}
