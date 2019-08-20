import Bot from "./Bot.js";
import getCurrency from "./getCurrency.js";
import Integer from "./Integer.js";
import OrderInfo from "./OrderInfo.js";
import String from "./String.js";

export default class SuccessfulPayment extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            currency,
            total_amount,
            invoice_payload,
            shipping_option_id,
            order_info,
            telegram_payment_charge_id,
            provider_payment_charge_id,
        } = _value;
        this.currency = String(currency);
        this.total_amount = Integer(total_amount);
        this.invoice_payload = String(invoice_payload);
        if (shipping_option_id != null) {
            this.shipping_option_id = String(shipping_option_id);
        }
        if (order_info != null) {
            this.order_info = new OrderInfo(order_info, _token);
        }
        this.telegram_payment_charge_id = String(telegram_payment_charge_id);
        this.provider_payment_charge_id = String(provider_payment_charge_id);
    }
    getCurrency() {
        "use strict";
        return getCurrency(this.currency);
    }
}
