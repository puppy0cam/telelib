import { Bot, User, ShippingAddress } from "./_internals.mjs";
/** This object contains information about an incoming shipping query. */
export class ShippingQuery extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.from) {
            this.from = new User(this.from, token);
        }
        if (this.shipping_address) {
            this.shipping_address = new ShippingAddress(this.shipping_address, token);
        }
    }
    answerShippingQuery(options, timeout) {
        "use strict";
        return super.answerShippingQuery({
            shipping_query_id: this.id,
            ...options,
        }, timeout);
    }
}
