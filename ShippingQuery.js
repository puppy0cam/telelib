"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** This object contains information about an incoming shipping query. */
class ShippingQuery extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.from) {
            this.from = new _internals_js_1.User(this.from, token);
        }
        if (this.shipping_address) {
            this.shipping_address = new _internals_js_1.ShippingAddress(this.shipping_address, token);
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
exports.ShippingQuery = ShippingQuery;
