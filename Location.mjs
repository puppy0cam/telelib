import { Bot } from "./_internals.mjs";
/** This object represents a point on the map. */
export class Location extends Bot {
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
