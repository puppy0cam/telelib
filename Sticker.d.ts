import Boolean from "./Boolean";
import File from "./File";
import InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply from "./InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply";
import Integer from "./Integer";
import Integer_or_String from "./Integer or String";
import MaskPosition from "./MaskPosition";
import Message from "./Message";
import PhotoSize from "./PhotoSize";
import String from "./String";
import StickerSet from "./StickerSet";
import True from "./True";

/** This object represents a sticker. */
export default class Sticker implements ISticker {
    constructor(data: ISticker | Sticker, token?: string);
    public file_id: String;
    public width: Integer;
    public height: Integer;
    public is_animated: Boolean;
    public thumb?: PhotoSize;
    public emoji?: String;
    public set_name?: String;
    public mask_position?: MaskPosition;
    public file_size?: Integer;
    /** Use this method to send .webp stickers. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public sendSticker(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply;
    }): Promise<Message>;
    /**
     * Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a [File](https://core.telegram.org/bots/api#file) object is returned. The file can then be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`, where `<file_path>` is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api#getfile) again.
     *
     * **Note:** This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received.
     */
    public getFile(): Promise<File>;
    /** Use this method to get a sticker set. On success, a [StickerSet](https://core.telegram.org/bots/api#stickerset) object is returned. */
    public getStickerSet(): Promise<StickerSet>;
    /** Use this method to create new sticker set owned by a user. The bot will be able to edit the created sticker set. Returns *True* on success. */
    public createNewStickerSet(options: {
        /** User identifier of created sticker set owner */
        user_id: Integer;
        /** Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in *“_by_<bot username>”*. *<bot_username>* is case insensitive. 1-64 characters. */
        name: String;
        /** Sticker set title, 1-64 characters */
        title: String;
        /** One or more emoji corresponding to the sticker */
        emojis: String;
        /** Pass *True*, if a set of mask stickers should be created */
        contains_masks?: Boolean;
        /** A JSON-serialized object for position where the mask should be placed on faces */
        mask_position?: MaskPosition;
    }): Promise<True>;
    /** Use this method to add a new sticker to a set created by the bot. Returns *True* on success. */
    public addStickerToSet(options: {
        /** User identifier of sticker set owner */
        user_id: Integer;
        /** Sticker set name */
        name: String;
        /** One or more emoji corresponding to the sticker */
        emojis: String;
        /** A JSON-serialized object for position where the mask should be placed on faces */
        mask_position?: MaskPosition;
    }): Promise<True>;
    /** Use this method to move a sticker in a set created by the bot to a specific position . Returns *True* on success. */
    public setStickerPositionInSet(options: {
        /** New sticker position in the set, zero-based */
        position: Integer;
    }): Promise<True>;
    /** Use this method to delete a sticker from a set created by the bot. Returns *True* on success. */
    public deleteStickerFromSet(): Promise<True>;
}

export interface ISticker {
    /** Unique identifier for this file */
    file_id: String;
    /** Sticker width */
    width: Integer;
    /** Sticker height */
    height: Integer;
    /** *True*, if the sticker is [animated](https://telegram.org/blog/animated-stickers) */
    is_animated: Boolean;
    /** Sticker thumbnail in the .webp or .jpg format */
    thumb?: PhotoSize;
    /** Emoji associated with the sticker */
    emoji?: String;
    /** Name of the sticker set to which the sticker belongs */
    set_name?: String;
    /** For mask stickers, the position where the mask should be placed */
    mask_position?: MaskPosition;
    /** File size */
    file_size?: Integer;
}
