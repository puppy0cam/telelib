"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** This object represents on size of a photo or a [file](https://core.telegram.org/bots/api#document) / [sticker](https://core.telegram.org/bots/api#sticker) thumbnail */
class PhotoSize extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
    sendPhoto(options, timeout) {
        "use strict";
        return super.sendPhoto({
            photo: this.file_id,
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
exports.PhotoSize = PhotoSize;
