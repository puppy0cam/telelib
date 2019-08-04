import Boolean from "./Boolean";
import File from "./File";
import InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply from "./InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply";
import Integer from "./Integer";
import Integer_or_String from "./Integer or String";
import Message from "./Message";
import PhotoSize from "./PhotoSize";
import String from "./String";

/** This object represents an audio file to be treated as music by the Telegram clients. */
export default class Audio implements IAudio {
    constructor(data: IAudio | Audio, token?: string);
    public file_id: String;
    public duration: Integer;
    public performer?: String;
    public title?: String;
    public mime_type?: String;
    public file_size?: Integer;
    public thumb?: PhotoSize;
    /**
     * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .mp3 format. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
     *
     * For sending voice messages, use the [sendVoice](https://core.telegram.org/bots/api#sendvoice) method instead.
     */
    public sendAudio(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Voice message caption, 0-1024 characters */
        caption?: String;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: String;
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
}

export interface IAudio {
    /** Unique identifier for this file */
    file_id: String;
    /** Duration of the audio in seconds as defined by sender */
    duration: Integer;
    /** Performer of the audio as defined by sender or by audio tags */
    performer?: String;
    /** Title of the audio as defined by sender or by audio tags */
    title?: String;
    /** MIME type of the file as defined by sender */
    mime_type?: String;
    /** File size */
    file_size?: Integer;
    /** Thumbnail of the album cover to which the music file belongs */
    thumb?: PhotoSize;
}
