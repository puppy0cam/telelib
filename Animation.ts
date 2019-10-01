import { Bot, File, IForceReply, IInlineKeyboardMarkup, IPhotoSize, IReplyKeyboardMarkup, IReplyKeyboardRemove, Message, PhotoSize } from "./_internals.js";

/** This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound). */
export class Animation extends File implements IAnimation {
    constructor(data: IAnimation, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.thumb) {
            this.thumb = new PhotoSize(this.thumb, this);
        }
    }
    public file_id!: string;
    public width!: number;
    public height!: number;
    public duration!: number;
    public thumb?: PhotoSize;
    public file_name?: string;
    public mime_type?: string;
    public file_size?: number;
    public sendAnimation(options: {
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
        return super.sendAnimation({
            animation: this.file_id,
            ...options,
        }, timeout);
    }
    public getFile(options?: {}, timeout?: number): Promise<File> {
        "use strict";
        return super.getFile({
            file_id: this.file_id,
            ...options,
        }, timeout);
    }
}

/** This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound). */
export interface IAnimation {
    /** Unique file identifier */
    file_id: string;
    /** Video width as defined by sender */
    width: number;
    /** Video height as defined by sender */
    height: number;
    /** Duration of the video in seconds as defined by sender */
    duration: number;
    /** Animation thumbnail as defined by sender */
    thumb?: IPhotoSize;
    /** Original animation filename as defined by sender */
    file_name?: string;
    /** MIME type of the file as defined by sender */
    mime_type?: string;
    /** File size */
    file_size?: number;
}
