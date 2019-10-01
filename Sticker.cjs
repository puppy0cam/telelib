"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/** This object represents a sticker. */
class Sticker extends _internals_js_1.File {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.thumb) {
            this.thumb = new _internals_js_1.PhotoSize(this.thumb, this);
        }
        if (this.mask_position) {
            this.mask_position = new _internals_js_1.MaskPosition(this.mask_position, this);
        }
    }
    sendSticker(options, timeout) {
        "use strict";
        return super.sendSticker({
            sticker: this.file_id,
            ...options,
        }, timeout);
    }
    getStickerSet(options, timeout) {
        "use strict";
        return super.getStickerSet({
            name: this.set_name,
            ...options,
        }, timeout);
    }
    createNewStickerSet(options, timeout) {
        "use strict";
        return super.createNewStickerSet({
            png_sticker: this.file_id,
            ...options,
        }, timeout);
    }
    addStickerToSet(options, timeout) {
        "use strict";
        return super.addStickerToSet({
            png_sticker: this.file_id,
            ...options,
        }, timeout);
    }
    setStickerPositionInSet(options, timeout) {
        "use strict";
        return super.setStickerPositionInSet({
            sticker: this.file_id,
            ...options,
        }, timeout);
    }
    deleteStickerFromSet(options, timeout) {
        "use strict";
        return super.deleteStickerFromSet({
            sticker: this.file_id,
            ...options,
        }, timeout);
    }
}
exports.Sticker = Sticker;
