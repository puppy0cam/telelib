"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** This object represents a point on the map. */
class Location extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
    sendLocation(options, timeout) {
        "use strict";
        return super.sendLocation({
            longitude: this.longitude,
            latitude: this.latitude,
            ...options,
        }, timeout);
    }
    sendVenue(options, timeout) {
        "use strict";
        return super.sendVenue({
            longitude: this.longitude,
            latitude: this.latitude,
            ...options,
        }, timeout);
    }
}
exports.Location = Location;
