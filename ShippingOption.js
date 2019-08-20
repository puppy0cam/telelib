import Array_of_LabeledPrice from "./Array of LabeledPrice.js";
import Bot from "./Bot.js";
import String from "./String.js";

export default class ShippingOption extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            id,
            title,
            prices,
        } = _value;
        this.id = String(id);
        this.title = String(title);
        this.prices = Array_of_LabeledPrice(prices, _token);
    }
}
