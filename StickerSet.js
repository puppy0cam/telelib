import String from "./String.js";
import Boolean from "./Boolean.js";
import Array_of_Sticker from "./Array of Sticker.js";
import Bot from "./Bot.js";

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
}
