import Location from "./Location.js";
import String from "./String.js";
import Bot from "./Bot.js";

export default class Venue extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            location,
            title,
            address,
            foursquare_id,
            foursquare_type,
        } = _value;
        this.location = new Location(location, _token);
        this.title = String(title);
        this.address = String(address);
        if (foursquare_id != null) {
            this.foursquare_id = String(foursquare_id);
        }
        if (foursquare_type != null) {
            this.foursquare_type = String(foursquare_type);
        }
    }
    sendVenue(options) {
        "use strict";
        return super.sendVenue(Object.assign({
            address: this.address,
            foursquare_id: this.foursquare_id,
            foursquare_type: this.foursquare_type,
            latitude: this.location.latitude,
            longitude: this.location.longitude,
            title: this.title,
        }, options));
    }
}
