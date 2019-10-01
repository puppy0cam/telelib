import { Bot, OrderInfo } from "./_internals.mjs";
/** This object contains basic information about a successful payment. */
export class SuccessfulPayment extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.order_info) {
            this.order_info = new OrderInfo(this.order_info, this);
        }
    }
}
