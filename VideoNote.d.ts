import { Bot, File, IForceReply, IInlineKeyboardMarkup, IPhotoSize, IReplyKeyboardMarkup, IReplyKeyboardRemove, Message, PhotoSize } from "./_internals.js";
/** This object represents a [video message](https://telegram.org/blog/video-messages-and-telescope) (available in Telegram apps as of [v.4.0](https://telegram.org/blog/video-messages-and-telescope)). */
export declare class VideoNote extends File implements IVideoNote {
    constructor(data: IVideoNote, token?: string | Bot);
    file_id: string;
    length: number;
    duration: number;
    thumb?: PhotoSize;
    file_size?: number;
    sendVideoNote(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: number | string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
}
/** This object represents a [video message](https://telegram.org/blog/video-messages-and-telescope) (available in Telegram apps as of [v.4.0](https://telegram.org/blog/video-messages-and-telescope)). */
export interface IVideoNote {
    /** Unique identifier for this file */
    file_id: string;
    /** Video width and height (diameter of the video message) as defined by sender */
    length: number;
    /** Duration of the video in seconds as defined by sender */
    duration: number;
    /** Video thumbnail */
    thumb?: IPhotoSize;
    /** File size */
    file_size?: number;
}
