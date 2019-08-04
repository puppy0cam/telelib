import String from "./String";
import Integer from "./Integer";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/** Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use *input_message_content* to send a message with the specified content instead of the photo. */
export default class InlineQueryResultPhoto implements IInlineQueryResultPhoto {
    constructor(data: IInlineQueryResultPhoto | InlineQueryResultPhoto, token?: string);
    public type: String;
    public id: String;
    public photo_url: String;
    public thumb_url: String;
    public photo_width?: Integer;
    public photo_height?: Integer;
    public title?: String;
    public description?: String;
    public caption?: String;
    public parse_mode?: String;
    public reply_markup?: InlineKeyboardMarkup;
    public input_message_content?: InputMessageContent;
}

export interface IInlineQueryResultPhoto {
    /** Type of the result, must be *photo* */
    type: String;
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid URL of the photo. Photo must be in **jpeg** format. Photo size must not exceed 5MB */
    photo_url: String;
    /** URL of the thumbnail for the photo */
    thumb_url: String;
    /** Width of the photo */
    photo_width?: Integer;
    /** Height of the photo */
    photo_height?: Integer;
    /** Title for the result */
    title?: String;
    /** Short description of the result */
    description?: String;
    /** Caption of the photo to be sent, 0-1024 characters */
    caption?: String;
    /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
    parse_mode?: String;
    /** [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the photo */
    input_message_content?: InputMessageContent;
}
