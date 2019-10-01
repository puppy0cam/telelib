import { Location, Bot, } from "./_internals.mjs";
/** This object represents a venue. */
export class Venue extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.location) {
            this.location = new Location(this.location, this);
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
