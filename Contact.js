import { Bot } from "./_internals.js";
/** This object represents a phone contact. */
export class Contact extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
    sendContact(options, timeout) {
        "use strict";
        return super.sendContact({
            phone_number: this.phone_number,
            first_name: this.first_name,
            last_name: this.last_name,
            vcard: this.vcard,
            ...options,
        }, timeout);
    }
}
