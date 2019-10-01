import { Bot, IInlineKeyboardMarkup, IReplyKeyboardMarkup, IReplyKeyboardRemove, IForceReply, Message, File } from "./_internals.js";
/** This object represents on size of a photo or a [file](https://core.telegram.org/bots/api#document) / [sticker](https://core.telegram.org/bots/api#sticker) thumbnail */
export declare class PhotoSize extends Bot implements IPhotoSize {
    constructor(data: IPhotoSize, token?: string | Bot);
    file_id: string;
    width: number;
    height: number;
    file_size?: number;
    sendPhoto(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: number | string;
        /** Photo caption (may also be used when resending photos by *file_id*), 0-1024 characters */
        caption?: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
    getFile(options?: {}, timeout?: number): Promise<File>;
}
/** This object represents on size of a photo or a [file](https://core.telegram.org/bots/api#document) / [sticker](https://core.telegram.org/bots/api#sticker) thumbnail */
export interface IPhotoSize {
    /** Unique identifier for this file */
    file_id: string;
    /** Photo width */
    width: number;
    /** Photo height */
    height: number;
    /** File size */
    file_size?: number;
}
