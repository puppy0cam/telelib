"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/** This object represents one shipping option. */
class ShippingOption extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.prices) {
            this.prices = _internals_js_1.Array_of_LabeledPrice(this.prices, this);
        }
    }
}
exports.ShippingOption = ShippingOption;
