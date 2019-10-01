import { Array_of_Sticker, Bot } from "./_internals.mjs";
/** This object represents a sticker set. */
export class StickerSet extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.stickers) {
            this.stickers = Array_of_Sticker(this.stickers, this);
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
