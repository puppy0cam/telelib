import String from "./String";
import Integer from "./Integer";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/** Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use *input_message_content* to send a message with the specified content instead of the animation. */
export default class InlineQueryResultMpeg4Gif implements IInlineQueryResultMpeg4Gif {
    constructor(data: IInlineQueryResultMpeg4Gif | InlineQueryResultMpeg4Gif, token?: string);
    public type: String;
    public id: String;
    public mpeg4_url: String;
    public mpeg4_width?: Integer;
    public mpeg4_height?: Integer;
    public mpeg4_duration?: Integer;
    public thumb_url: String;
    public title?: String;
    public caption?: String;
    public parse_mode?: String;
    public reply_markup?: InlineKeyboardMarkup;
    public input_message_content?: InputMessageContent;
}

export interface IInlineQueryResultMpeg4Gif {
    /** Type of the result, must be *mpeg4_gif* */
    type: String;
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid URL for the MP4 file. File size must not exceed 1MB */
    mpeg4_url: String;
    /** Video width */
    mpeg4_width?: Integer;
    /** Video height */
    mpeg4_height?: Integer;
    /** Video duration */
    mpeg4_duration?: Integer;
    /** URL of the static thumbnail (jpeg or gif) for the result */
    thumb_url: String;
    /** Title for the result */
    title?: String;
    /** Caption of the MPEG-4 file to be sent, 0-1024 characters */
    caption?: String;
    /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
    parse_mode?: String;
    /** [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the video animation */
    input_message_content?: InputMessageContent;
}
