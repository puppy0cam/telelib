"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/** This object represents a [video message](https://telegram.org/blog/video-messages-and-telescope) (available in Telegram apps as of [v.4.0](https://telegram.org/blog/video-messages-and-telescope)). */
class VideoNote extends _internals_js_1.File {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.thumb) {
            this.thumb = new _internals_js_1.PhotoSize(this.thumb, this);
        }
    }
    sendVideoNote(options, timeout) {
        "use strict";
        return super.sendVideoNote({
            video_note: this.file_id,
            ...options,
        }, timeout);
    }
}
exports.VideoNote = VideoNote;
