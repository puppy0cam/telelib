"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/** This object represents a general file (as opposed to [photos](https://core.telegram.org/bots/api#photosize), [voice messages](https://core.telegram.org/bots/api#voice) and [audio files](https://core.telegram.org/bots/api#audio)). */
class Document extends _internals_js_1.File {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.thumb) {
            this.thumb = new _internals_js_1.PhotoSize(this.thumb, this);
        }
    }
    sendDocument(options, timeout) {
        "use strict";
        return super.sendDocument({
            document: this.file_id,
            ...options,
        }, timeout);
    }
}
exports.Document = Document;
