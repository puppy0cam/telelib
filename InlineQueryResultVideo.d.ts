import String from "./String";
import Integer from "./Integer";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/**
 * Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use *input_message_content* to send a message with the specified content instead of the video.
 * >If an InlineQueryResultVideo message contains an embedded video (e.g., YouTube), you **must** replace its content using *input_message_content*.
 */
export default class InlineQueryResultVideo implements IInlineQueryResultVideo {
    constructor(data: IInlineQueryResultVideo | InlineQueryResultVideo, token?: string);
    public type: String;
    public id: String;
    public video_url: String;
    public mime_type: String;
    public thumb_url: String;
    public title: String;
    public caption?: String;
    public parse_mode?: String;
    public video_width?: Integer;
    public video_height?: Integer;
    public video_duration?: Integer;
    public description?: String;
    public reply_markup?: InlineKeyboardMarkup;
    public input_message_content?: InputMessageContent;
}

export interface IInlineQueryResultVideo {
    /** Type of the result, must be *video* */
    type: String;
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid URL for the embedded video player or video file */
    video_url: String;
    /** Mime type of the content of video url, “text/html” or “video/mp4” */
    mime_type: String;
    /** URL of the thumbnail (jpeg only) for the video */
    thumb_url: String;
    /** Title for the result */
    title: String;
    /** Caption of the video to be sent, 0-1024 characters */
    caption?: String;
    /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
    parse_mode?: String;
    /** Video width */
    video_width?: Integer;
    /** Video height */
    video_height?: Integer;
    /** Video duration in seconds */
    video_duration?: Integer;
    /** Short description of the result */
    description?: String;
    /** [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the video. This field is **required** if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video). */
    input_message_content?: InputMessageContent;
}
