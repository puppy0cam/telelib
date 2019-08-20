import Bot from "./Bot.js";
import Float from "./Float.js";
import Integer from "./Integer.js";

export default class InputLocationMessageContent extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            latitude,
            longitude,
            live_period,
        } = _value;
        this.latitude = Float(latitude);
        this.longitude = Float(longitude);
        if (live_period != null) {
            this.live_period = Integer(live_period);
        }
    }
}
