import String from "./String";
import Boolean from "./Boolean";
import Array_of_Sticker from "./Array of Sticker";

/** This object represents a sticker set. */
export default class StickerSet implements IStickerSet {
    constructor(data: IStickerSet | StickerSet, token?: string);
    public name: String;
    public title: String;
    public is_animated: Boolean;
    public contains_masks: Boolean;
    public stickers: Array_of_Sticker;
}

export interface IStickerSet {
    /** Sticker set name */
    name: String;
    /** Sticker set title */
    title: String;
    /** *True*, if the sticker set contains [animated stickers](https://telegram.org/blog/animated-stickers) */
    is_animated: Boolean;
    /** *True*, if the sticker set contains masks */
    contains_masks: Boolean;
    /** List of all set stickers */
    stickers: Array_of_Sticker;
}
