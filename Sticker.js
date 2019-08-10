import String from "./String.js";
import Integer from "./Integer.js";
import Boolean from "./Boolean.js";
import PhotoSize from "./PhotoSize.js";
import MaskPosition from "./MaskPosition.js";
import Bot from "./Bot.js";

export default class Sticker extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            file_id,
            width,
            height,
            is_animated,
            thumb,
            emoji,
            set_name,
            mask_position,
            file_size,
        } = _value;
        this.file_id = String(file_id);
        this.width = Integer(width);
        this.height = Integer(height);
        this.is_animated = Boolean(is_animated);
        if (thumb != null) {
            this.thumb = new PhotoSize(thumb, _token);
        }
        if (emoji != null) {
            this.emoji = String(emoji);
        }
        if (set_name != null) {
            this.set_name = String(set_name);
        }
        if (mask_position != null) {
            this.mask_position = new MaskPosition(mask_position, _token);
        }
        if (file_size != null) {
            this.file_size = Integer(file_size);
        }
    }
    #getMethodOptions = function(options) {
        "use strict";
        return Object.assign({
            sticker: this.file_id,
        }, options);
    }
    sendSticker(options) {
        "use strict";
        return super.sendSticker(this.#getMethodOptions(options));
    }
    getFile(options) {
        "use strict";
        return super.getFile(Object.assign({
            file_id: this.file_id,
        }, options));
    }
    getStickerSet(options) {
        "use strict";
        return super.getStickerSet(Object.assign({
            name: this.set_name,
        }, options));
    }
    deleteStickerFromSet(options) {
        "use strict";
        return super.deleteStickerFromSet(this.#getMethodOptions(options));
    }
    setStickerPositionInSet(options) {
        "use strict";
        return super.setStickerPositionInSet(this.#getMethodOptions(options));
    }
    addStickerToSet(options) {
        "use strict";
        return super.addStickerToSet(Object.assign({
            png_sticker: this.file_id,
        }, options));
    }
    createNewStickerSet(options) {
        "use strict";
        return super.createNewStickerSet(Object.assign({
            png_sticker: this.file_id,
        }, options));
    }
}
