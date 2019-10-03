"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** This object represent a user's profile pictures. */
class UserProfilePhotos extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.photos) {
            this.photos = _internals_js_1.Array_of_Array_of_PhotoSize(this.photos, this);
        }
    }
}
exports.UserProfilePhotos = UserProfilePhotos;
