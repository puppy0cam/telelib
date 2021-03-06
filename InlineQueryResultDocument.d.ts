import String from "./String";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";
import Integer from "./Integer";

/**
 * Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use *input_message_content* to send a message with the specified content instead of the file. Currently, only **.PDF** and **.ZIP** files can be sent using this method.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export default class InlineQueryResultDocument implements IInlineQueryResultDocument {
    constructor(data: IInlineQueryResultDocument | InlineQueryResultDocument, token?: string);
    public type: String;
    public id: String;
    public title: String;
    public caption?: String;
    public parse_mode?: String;
    public document_url: String;
    public mime_type: String;
    public description?: String;
    public reply_markup?: InlineKeyboardMarkup;
    public input_message_content?: InputMessageContent;
    public thumb_url?: String;
    public thumb_width?: Integer;
    public thumb_height?: Integer;
}

export interface IInlineQueryResultDocument {
    /** Type of the result, must be *document* */
    type: String;
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** Title for the result */
    title: String;
    /** Caption of the document to be sent, 0-1024 characters */
    caption?: String;
    /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
    parse_mode?: String;
    /** A valid URL for the file */
    document_url: String;
    /** Mime type of the content of the file, either “application/pdf” or “application/zip” */
    mime_type: String;
    /** Short description of the result */
    description?: String;
    /** [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the file */
    input_message_content?: InputMessageContent;
    /** Url of the thumbnail (jpeg only) for the file */
    thumb_url?: String;
    /** Thumbnail width */
    thumb_width?: Integer;
    /** Thumbnail height */
    thumb_height?: Integer;
}
