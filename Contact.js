"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** This object represents a phone contact. */
class Contact extends _internals_js_1.Bot {
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
exports.Contact = Contact;
