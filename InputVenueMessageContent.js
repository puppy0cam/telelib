import Bot from "./Bot.js";
import Float from "./Float.js";
import String from "./String.js";

export default class InputVenueMessageContent extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            latitude,
            longitude,
            title,
            address,
            foursquare_id,
            foursquare_type,
        } = _value;
        this.latitude = Float(latitude);
        this.longitude = Float(longitude);
        this.title = String(title);
        this.address = String(address);
        if (foursquare_id != null) {
            this.foursquare_id = String(foursquare_id);
        }
        if (foursquare_type != null) {
            this.foursquare_type = String(foursquare_type);
        }
    }
}
