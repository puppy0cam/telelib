import Bot from "./Bot.js";
import getCurrency from "./getCurrency.js";
import Integer from "./Integer.js";
import OrderInfo from "./OrderInfo.js";
import String from "./String.js";
import User from "./User.js";

export default class PreCheckoutQuery extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            id,
            from,
            currency,
            total_amount,
            invoice_payload,
            shipping_option_id,
            order_info,
        } = _value;
        this.id = String(id);
        this.from = new User(from, _token);
        this.currency = String(currency);
        this.total_amount = Integer(total_amount);
        this.invoice_payload = String(invoice_payload);
        if (shipping_option_id != null) {
            this.shipping_option_id = String(shipping_option_id);
        }
        if (order_info != null) {
            this.order_info = new OrderInfo(order_info, _token);
        }
    }
    answerPreCheckoutQuery(options) {
        "use strict";
        return super.answerPreCheckoutQuery(Object.assign({
            pre_checkout_query: this.id,
            ok: true
        }, options));
    }
    getCurrency() {
        "use strict";
        return getCurrency(this.currency);
    }
}
