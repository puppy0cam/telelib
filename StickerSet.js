import Array_of_Sticker from "./Array of Sticker.js";
import Boolean from "./Boolean.js";
import Bot from "./Bot.js";
import String from "./String.js";

function getMethodOptions(options) {
    "use strict";
    return Object.assign({
        name: this.name,
    }, options);
}
export default class StickerSet extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            name,
            title,
            is_animated,
            contains_masks,
            stickers,
        } = _value;
        this.name = String(name);
        this.title = String(title);
        this.is_animated = Boolean(is_animated);
        this.contains_masks = Boolean(contains_masks);
        this.stickers = Array_of_Sticker(stickers, _token);
    }
    #getMethodOptions = getMethodOptions;
    getStickerSet(options) {
        "use strict";
        return super.getStickerSet(this.#getMethodOptions(options));
    }
    addStickerToSet(options) {
        "use strict";
        return super.addStickerToSet(this.#getMethodOptions(options));
    }
}
