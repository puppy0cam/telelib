import String from "./String";
import Boolean from "./Boolean";
import Array_of_Sticker from "./Array of Sticker";
import InputFile_or_String from "./InputFile or String";
import MaskPosition from "./MaskPosition";
import Integer from "./Integer";
import True from "./True";

/** This object represents a sticker set. */
export default class StickerSet implements IStickerSet {
    constructor(data: IStickerSet | StickerSet, token?: string);
    public name: String;
    public title: String;
    public is_animated: Boolean;
    public contains_masks: Boolean;
    public stickers: Array_of_Sticker;
    /** Use this method to add a new sticker to a set created by the bot. Returns *True* on success. */
    public addStickerToSet(options: {
        /** User identifier of sticker set owner */
        user_id: Integer;
        /** **Png** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a *file_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        png_sticker: InputFile_or_String;
        /** One or more emoji corresponding to the sticker */
        emojis: String;
        /** A JSON-serialized object for position where the mask should be placed on faces */
        mask_position?: MaskPosition;
    }): Promise<True>;
    /** Use this method to get a sticker set. On success, a [StickerSet](https://core.telegram.org/bots/api#stickerset) object is returned. */
    public getStickerSet(): Promise<StickerSet>;
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
