import { Bot, User, OrderInfo } from "./_internals.mjs";
/** This object contains information about an incoming pre-checkout query. */
export class PreCheckoutQuery extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.from) {
            this.from = new User(this.from, this);
        }
        if (this.order_info) {
            this.order_info = new OrderInfo(this.order_info, this);
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
