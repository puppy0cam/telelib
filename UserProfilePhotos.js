import Integer from "./Integer.js";
import Array_of_Array_of_PhotoSize from "./Array of Array of PhotoSize.js";
import Bot from "./Bot.js";

export default class UserProfilePhotos extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            total_count,
            photos,
        } = _value;
        this.total_count = Integer(total_count);
        this.photos = Array_of_Array_of_PhotoSize(photos, _token);
    }
}
