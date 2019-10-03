"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** This object represents information about an order. */
class OrderInfo extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.shipping_address) {
            this.shipping_address = new _internals_js_1.ShippingAddress(this.shipping_address, this);
        }
    }
}
exports.OrderInfo = OrderInfo;
