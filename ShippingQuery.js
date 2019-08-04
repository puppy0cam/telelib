import String from "./String.js";
import User from "./User.js";
import ShippingAddress from "./ShippingAddress.js";
import Bot from "./Bot.js";

export default class ShippingQuery extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            id,
            from,
            invoice_payload,
            shipping_address,
        } = _value;
        this.id = String(id);
        this.from = new User(from, _token);
        this.invoice_payload = String(invoice_payload);
        this.shipping_address = new ShippingAddress(shipping_address, _token);
    }
    answerShippingQuery(options) {
        "use strict";
        return super.answerShippingQuery(Object.assign({
            shipping_query_id: this.id,
        }, options));
    }
}
