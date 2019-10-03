"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** This object represents a chat photo. */
class ChatPhoto extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
    /**
     * To PhotoSize objects that you can each use getFile on.
     */
    toPhotoSizes() {
        "use strict";
        return [
            new _internals_js_1.PhotoSize({
                file_id: this.small_file_id,
                height: 160,
                width: 160,
            }, this),
            new _internals_js_1.PhotoSize({
                file_id: this.big_file_id,
                height: 640,
                width: 640,
            }, this),
        ];
    }
}
exports.ChatPhoto = ChatPhoto;
