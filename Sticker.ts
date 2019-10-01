import { Bot, StickerSet, File, PhotoSize, IPhotoSize, MaskPosition, IMaskPosition, IInlineKeyboardMarkup, IReplyKeyboardMarkup, IReplyKeyboardRemove, IForceReply, Message } from "./_internals.js";

/** This object represents a sticker. */
export class Sticker extends File implements ISticker {
    constructor(data: ISticker, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.thumb) {
            this.thumb = new PhotoSize(this.thumb, this);
        }
        if (this.mask_position) {
            this.mask_position = new MaskPosition(this.mask_position, this);
        }
    }
    public file_id!: string;
    public width!: number;
    public height!: number;
    public is_animated!: boolean;
    public thumb?: PhotoSize;
    public emoji?: string;
    public set_name?: string;
    public mask_position?: MaskPosition;
    public file_size?: number;
    public sendSticker(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: number | string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendSticker({
            sticker: this.file_id,
            ...options,
        }, timeout);
    }
    public getStickerSet(options?: {}, timeout?: number): Promise<StickerSet> {
        "use strict";
        return super.getStickerSet({
            name: this.set_name as string,
            ...options,
        }, timeout);
    }
    public createNewStickerSet(options: {
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
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.createNewStickerSet({
            png_sticker: this.file_id,
            ...options,
        }, timeout);
    }
    public addStickerToSet(options: {
        /** User identifier of sticker set owner */
        user_id: number;
        /** Sticker set name */
        name: string;
        /** One or more emoji corresponding to the sticker */
        emojis: string;
        /** A JSON-serialized object for position where the mask should be placed on faces */
        mask_position?: IMaskPosition;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.addStickerToSet({
            png_sticker: this.file_id,
            ...options,
        }, timeout);
    }
    public setStickerPositionInSet(options: {
        /** New sticker position in the set, zero-based */
        position: number;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.setStickerPositionInSet({
            sticker: this.file_id,
            ...options,
        }, timeout);
    }
    public deleteStickerFromSet(options?: {}, timeout?: number): Promise<true> {
        "use strict";
        return super.deleteStickerFromSet({
            sticker: this.file_id,
            ...options,
        }, timeout);
    }
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
