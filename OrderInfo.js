import String from "./String.js";
import ShippingAddress from "./ShippingAddress.js";
import Bot from "./Bot.js";

export default class OrderInfo extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            name,
            phone_number,
            email,
            shipping_address,
        } = _value;
        if (name != null) {
            this.name = String(name);
        }
        if (phone_number != null) {
            this.phone_number = String(phone_number);
        }
        if (email != null) {
            this.email = String(email);
        }
        if (shipping_address != null) {
            this.shipping_address = new ShippingAddress(shipping_address, _token);
        }
    }
}
