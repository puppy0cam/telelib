import Bot from "./Bot.js";
import String from "./String.js";

export default class ShippingAddress extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            country_code,
            state,
            city,
            street_line1,
            street_line2,
            post_code,
        } = _value;
        this.country_code = String(country_code);
        this.state = String(state);
        this.city = String(city);
        this.street_line1 = String(street_line1);
        this.street_line2 = String(street_line2);
        this.post_code = String(post_code);
    }
}
