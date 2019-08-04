import String from "./String";
import Integer from "./Integer";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/**
 * Represents a link to an mp3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use *input_message_content* to send a message with the specified content instead of the audio.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export default class InlineQueryResultAudio implements IInlineQueryResultAudio {
    constructor(data: IInlineQueryResultAudio | InlineQueryResultAudio, token?: string);
    public type: String;
    public id: String;
    public audio_url: String;
    public title: String;
    public caption?: String;
    public parse_mode?: String;
    public performer?: String;
    public audio_duration?: Integer;
    public reply_markup?: InlineKeyboardMarkup;
    public input_message_content?: InputMessageContent;
}

export interface IInlineQueryResultAudio {
    /** Type of the result, must be *audio* */
    type: String;
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid URL for the audio file */
    audio_url: String;
    /** Title */
    title: String;
    /** Caption, 0-1024 characters */
    caption?: String;
    /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
    parse_mode?: String;
    /** Performer */
    performer?: String;
    /** Audio duration in seconds */
    audio_duration?: Integer;
    /** [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the audio */
    input_message_content?: InputMessageContent;
}
