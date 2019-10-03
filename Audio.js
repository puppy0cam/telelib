"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** This object represents an audio file to be treated as music by the Telegram clients. */
class Audio extends _internals_js_1.File {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.thumb) {
            this.thumb = new _internals_js_1.PhotoSize(this.thumb, this);
        }
    }
    sendAudio(options, timeout) {
        "use strict";
        return super.sendAudio({
            audio: this.file_id,
            ...options,
        }, timeout);
    }
}
exports.Audio = Audio;
