"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/** This object represents a venue. */
class Venue extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.location) {
            this.location = new _internals_js_1.Location(this.location, this);
        }
    }
    sendVenue(options, timeout) {
        "use strict";
        return super.sendVenue({
            latitude: this.location.latitude,
            longitude: this.location.longitude,
            title: this.title,
            address: this.address,
            foursquare_id: this.foursquare_id,
            foursquare_type: this.foursquare_type,
            ...options,
        }, timeout);
    }
    sendLocation(options, timeout) {
        "use strict";
        return super.sendLocation({
            latitude: this.location.latitude,
            longitude: this.location.longitude,
            ...options,
        }, timeout);
    }
}
exports.Venue = Venue;
