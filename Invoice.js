import Bot from "./Bot.js";
import getCurrency from "./getCurrency.js";
import Integer from "./Integer.js";
import String from "./String.js";

export default class Invoice extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            title,
            description,
            start_parameter,
            currency,
            total_amount,
        } = _value;
        this.title = String(title);
        this.description = String(description);
        this.start_parameter = String(start_parameter);
        this.currency = String(currency);
        this.total_amount = Integer(total_amount);
    }
    getCurrency() {
        "use strict";
        return getCurrency(this.currency);
    }
}
