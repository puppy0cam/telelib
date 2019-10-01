import { Bot, StickerSet, File, PhotoSize, IPhotoSize, MaskPosition, IMaskPosition, IInlineKeyboardMarkup, IReplyKeyboardMarkup, IReplyKeyboardRemove, IForceReply, Message } from "./_internals.js";
/** This object represents a sticker. */
export declare class Sticker extends File implements ISticker {
    constructor(data: ISticker, token?: string | Bot);
    file_id: string;
    width: number;
    height: number;
    is_animated: boolean;
    thumb?: PhotoSize;
    emoji?: string;
    set_name?: string;
    mask_position?: MaskPosition;
    file_size?: number;
    sendSticker(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: number | string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
    getStickerSet(options?: {}, timeout?: number): Promise<StickerSet>;
    createNewStickerSet(options: {
        /** User identifier of created sticker set owner */
        user_id: number;
        /** Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in *“_by_<bot username>”*. *<bot_username>* is case insensitive. 1-64 characters. */
        name: string;
        /** Sticker set title, 1-64 characters */
        title: string;
        /** One or more emoji corresponding to the sticker */
        emojis: string;
        /** Pass *True*, if a set of mask stickers should be created */
        contains_masks?: boolean;
        /** A JSON-serialized object for position where the mask should be placed on faces */
        mask_position?: IMaskPosition;
    }, timeout?: number): Promise<true>;
    addStickerToSet(options: {
        /** User identifier of sticker set owner */
        user_id: number;
        /** Sticker set name */
        name: string;
        /** One or more emoji corresponding to the sticker */
        emojis: string;
        /** A JSON-serialized object for position where the mask should be placed on faces */
        mask_position?: IMaskPosition;
    }, timeout?: number): Promise<true>;
    setStickerPositionInSet(options: {
        /** New sticker position in the set, zero-based */
        position: number;
    }, timeout?: number): Promise<true>;
    deleteStickerFromSet(options?: {}, timeout?: number): Promise<true>;
}
/** This object represents a sticker. */
export interface ISticker {
    /** Unique identifier for this file */
    file_id: string;
    /** Sticker width */
    width: number;
    /** Sticker height */
    height: number;
    /** *True*, if the sticker is [animated](https://telegram.org/blog/animated-stickers) */
    is_animated: boolean;
    /** Sticker thumbnail in the .webp or .jpg format */
    thumb?: IPhotoSize;
    /** Emoji associated with the sticker */
    emoji?: string;
    /** Name of the sticker set to which the sticker belongs */
    set_name?: string;
    /** For mask stickers, the position where the mask should be placed */
    mask_position?: IMaskPosition;
    /** File size */
    file_size?: number;
}
