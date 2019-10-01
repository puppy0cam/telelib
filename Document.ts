import { Bot, File, PhotoSize, IPhotoSize, Message, IInlineKeyboardMarkup, IReplyKeyboardMarkup, IReplyKeyboardRemove, IForceReply } from "./_internals.js";

/** This object represents a general file (as opposed to [photos](https://core.telegram.org/bots/api#photosize), [voice messages](https://core.telegram.org/bots/api#voice) and [audio files](https://core.telegram.org/bots/api#audio)). */
export class Document extends File implements IDocument {
    constructor(data: IDocument, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.thumb) {
            this.thumb = new PhotoSize(this.thumb, this);
        }
    }
    public file_id!: string;
    public thumb?: PhotoSize;
    public file_name?: string;
    public mime_type?: string;
    public file_size?: number;
    public sendDocument(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: number | string;
        /** Voice message caption, 0-1024 characters */
        caption?: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendDocument({
            document: this.file_id,
            ...options,
        }, timeout);
    }
}

/** This object represents a general file (as opposed to [photos](https://core.telegram.org/bots/api#photosize), [voice messages](https://core.telegram.org/bots/api#voice) and [audio files](https://core.telegram.org/bots/api#audio)). */
export interface IDocument {
    /** Unique file identifier */
    file_id: string;
    /** Document thumbnail as defined by sender */
    thumb?: IPhotoSize;
    /** Original filename as defined by sender */
    file_name?: string;
    /** MIME type of the file as defined by sender */
    mime_type?: string;
    /** File size */
    file_size?: number;
}
