import { Bot, Array_of_LabeledPrice } from "./_internals.mjs";
/** This object represents one shipping option. */
export class ShippingOption extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.prices) {
            this.prices = Array_of_LabeledPrice(this.prices, this);
        }
    }
}
