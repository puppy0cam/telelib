"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** This object represents a video file. */
class Video extends _internals_js_1.File {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
    sendVideo(options, timeout) {
        "use strict";
        return super.sendVideo({
            video: this.file_id,
            ...options,
        }, timeout);
    }
}
exports.Video = Video;
