"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** This object represents a sticker set. */
class StickerSet extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.stickers) {
            this.stickers = _internals_js_1.Array_of_Sticker(this.stickers, this);
        }
    }
    addStickerToSet(options, timeout) {
        "use strict";
        return super.addStickerToSet({
            name: this.name,
            ...options,
        }, timeout);
    }
    getStickerSet(options, timeout) {
        "use strict";
        return super.getStickerSet({
            name: this.name,
            ...options,
        }, timeout);
    }
}
exports.StickerSet = StickerSet;
