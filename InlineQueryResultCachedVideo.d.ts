import String from "./String";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/** Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use *input_message_content* to send a message with the specified content instead of the video. */
export default class InlineQueryResultCachedVideo implements IInlineQueryResultCachedVideo {
    constructor(data: IInlineQueryResultCachedVideo | InlineQueryResultCachedVideo, token?: string);
    public type: String;
    public id: String;
    public video_file_id: String;
    public title: String;
    public description?: String;
    public caption?: String;
    public parse_mode?: String;
    public reply_markup?: InlineKeyboardMarkup;
    public input_message_content?: InputMessageContent;
}

export interface IInlineQueryResultCachedVideo {
    /** Type of the result, must be *video* */
    type: String;
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid file identifier for the video file */
    video_file_id: String;
    /** Title for the result */
    title: String;
    /** Short description of the result */
    description?: String;
    /** Caption of the video to be sent, 0-1024 characters */
    caption?: String;
    /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
    parse_mode?: String;
    /** [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the video */
    input_message_content?: InputMessageContent;
}
