import String from "./String";
import Integer from "./Integer";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/** Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use *input_message_content* to send a message with the specified content instead of the animation. */
export default class InlineQueryResultGif implements IInlineQueryResultGif {
    constructor(data: IInlineQueryResultGif | InlineQueryResultGif, token?: string);
    public type: String;
    public id: String;
    public gif_url: String;
    public gif_width?: Integer;
    public gif_height?: Integer;
    public gif_duration?: Integer;
    public thumb_url: String;
    public title?: String;
    public caption?: String;
    public parse_mode?: String;
    public reply_markup?: InlineKeyboardMarkup;
    public input_message_content?: InputMessageContent;
}

export interface IInlineQueryResultGif {
    /** Type of the result, must be *gif* */
    type: String;
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid URL for the GIF file. File size must not exceed 1MB */
    gif_url: String;
    /** Width of the GIF */
    gif_width?: Integer;
    /** Height of the GIF */
    gif_height?: Integer;
    /** Duration of the GIF */
    gif_duration?: Integer;
    /** URL of the static thumbnail for the result (jpeg or gif) */
    thumb_url: String;
    /** Title for the result */
    title?: String;
    /** Caption of the GIF file to be sent, 0-1024 characters */
    caption?: String;
    /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
    parse_mode?: String;
    /** [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the GIF animation */
    input_message_content?: InputMessageContent;
}
