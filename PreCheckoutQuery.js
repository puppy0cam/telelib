"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** This object contains information about an incoming pre-checkout query. */
class PreCheckoutQuery extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.from) {
            this.from = new _internals_js_1.User(this.from, this);
        }
        if (this.order_info) {
            this.order_info = new _internals_js_1.OrderInfo(this.order_info, this);
        }
    }
    answerPreCheckoutQuery(options, timeout) {
        "use strict";
        return super.answerPreCheckoutQuery({
            pre_checkout_query_id: this.id,
            ...options,
        }, timeout);
    }
}
exports.PreCheckoutQuery = PreCheckoutQuery;
