"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/** This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound). */
class Animation extends _internals_js_1.File {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.thumb) {
            this.thumb = new _internals_js_1.PhotoSize(this.thumb, this);
        }
    }
    sendAnimation(options, timeout) {
        "use strict";
        return super.sendAnimation({
            animation: this.file_id,
            ...options,
        }, timeout);
    }
    getFile(options, timeout) {
        "use strict";
        return super.getFile({
            file_id: this.file_id,
            ...options,
        }, timeout);
    }
}
exports.Animation = Animation;
