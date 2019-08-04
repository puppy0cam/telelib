import Float from "./Float.js";
import Bot from "./Bot.js";

export default class Location extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            longitude,
            latitude,
        } = _value;
        this.longitude = Float(longitude);
        this.latitude = Float(latitude);
    }
    sendLocation(options) {
        "use strict";
        return super.sendLocation(Object.assign({
            latitude: this.latitude,
            longitude: this.longitude,
        }, options));
    }
}
