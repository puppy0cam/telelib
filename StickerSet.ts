import { Array_of_Sticker, Bot, IMaskPosition, InputFile, ISticker, Sticker } from "./_internals.js";

/** This object represents a sticker set. */
export class StickerSet extends Bot implements IStickerSet {
    constructor(data: IStickerSet, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.stickers) {
            this.stickers = Array_of_Sticker(this.stickers, this);
        }
    }
    public name!: string;
    public title!: string;
    public is_animated!: boolean;
    public contains_masks!: boolean;
    public stickers!: Sticker[];
    public addStickerToSet(options: {
        /** User identifier of sticker set owner */
        user_id: number;
        /** **Png** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a *file_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        png_sticker: InputFile | string;
        /** One or more emoji corresponding to the sticker */
        emojis: string;
        /** A JSON-serialized object for position where the mask should be placed on faces */
        mask_position?: IMaskPosition;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.addStickerToSet({
            name: this.name,
            ...options,
        }, timeout);
    }
    public getStickerSet(options?: {}, timeout?: number): Promise<StickerSet> {
        "use strict";
        return super.getStickerSet({
            name: this.name,
            ...options,
        }, timeout);
    }
}

/** This object represents a sticker set. */
export interface IStickerSet {
    /** Sticker set name */
    name: string;
    /** Sticker set title */
    title: string;
    /** *True*, if the sticker set contains [animated stickers](https://telegram.org/blog/animated-stickers) */
    is_animated: boolean;
    /** *True*, if the sticker set contains masks */
    contains_masks: boolean;
    /** List of all set stickers */
    stickers: ISticker[];
}
