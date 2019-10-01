import { Array_of_Array_of_PhotoSize, Bot } from "./_internals.mjs";
/** This object represent a user's profile pictures. */
export class UserProfilePhotos extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.photos) {
            this.photos = Array_of_Array_of_PhotoSize(this.photos, this);
        }
    }
}
