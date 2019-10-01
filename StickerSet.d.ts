import { Bot, IMaskPosition, InputFile, ISticker, Sticker } from "./_internals.js";
/** This object represents a sticker set. */
export declare class StickerSet extends Bot implements IStickerSet {
    constructor(data: IStickerSet, token?: string | Bot);
    name: string;
    title: string;
    is_animated: boolean;
    contains_masks: boolean;
    stickers: Sticker[];
    addStickerToSet(options: {
        /** User identifier of sticker set owner */
        user_id: number;
        /** **Png** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a *file_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        png_sticker: InputFile | string;
        /** One or more emoji corresponding to the sticker */
        emojis: string;
        /** A JSON-serialized object for position where the mask should be placed on faces */
        mask_position?: IMaskPosition;
    }, timeout?: number): Promise<true>;
    getStickerSet(options?: {}, timeout?: number): Promise<StickerSet>;
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
