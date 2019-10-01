import { Bot, Message, PhotoSize, IPhotoSize, IInlineKeyboardMarkup, IReplyKeyboardMarkup, IReplyKeyboardRemove, IForceReply, File } from "./_internals.js";

/** This object represents an audio file to be treated as music by the Telegram clients. */
export class Audio extends File implements IAudio {
    constructor(data: IAudio | Audio, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.thumb) {
            this.thumb = new PhotoSize(this.thumb, this);
        }
    }
    public file_id!: string;
    public duration!: number;
    public performer?: string;
    public title?: string;
    public mime_type?: string;
    public file_size?: number;
    public thumb?: PhotoSize;
    public sendAudio(options: {
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
        return super.sendAudio({
            audio: this.file_id,
            ...options,
        }, timeout);
    }
}

/** This object represents an audio file to be treated as music by the Telegram clients. */
export interface IAudio {
    /** Unique identifier for this file */
    file_id: string;
    /** Duration of the audio in seconds as defined by sender */
    duration: number;
    /** Performer of the audio as defined by sender or by audio tags */
    performer?: string;
    /** Title of the audio as defined by sender or by audio tags */
    title?: string;
    /** MIME type of the file as defined by sender */
    mime_type?: string;
    /** File size */
    file_size?: number;
    /** Thumbnail of the album cover to which the music file belongs */
    thumb?: IPhotoSize;
}
