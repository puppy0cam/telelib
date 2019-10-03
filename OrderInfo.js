import { Bot, ShippingAddress } from "./_internals.js";
/** This object represents information about an order. */
export class OrderInfo extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.shipping_address) {
            this.shipping_address = new ShippingAddress(this.shipping_address, this);
        }
    }
}
