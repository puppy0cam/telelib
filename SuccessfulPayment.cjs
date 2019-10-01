"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/** This object contains basic information about a successful payment. */
class SuccessfulPayment extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.order_info) {
            this.order_info = new _internals_js_1.OrderInfo(this.order_info, this);
        }
    }
}
exports.SuccessfulPayment = SuccessfulPayment;
