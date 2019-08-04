import String from "./String";
import InputMessageContent from "./InputMessageContent";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";
import Boolean from "./Boolean";
import Integer from "./Integer";

/** Represents a link to an article or web page. */
export default class InlineQueryResultArticle implements IInlineQueryResultArticle {
    constructor(data: IInlineQueryResultArticle | InlineQueryResultArticle, token?: string);
    public type: String;
    public id: String;
    public title: String;
    public input_message_content: InputMessageContent;
    public reply_markup?: InlineKeyboardMarkup;
    public url?: String;
    public hide_url?: Boolean;
    public description?: String;
    public thumb_url?: String;
    public thumb_width?: Integer;
    public thumb_height?: Integer;
}

export interface IInlineQueryResultArticle {
    /** Type of the result, must be *article* */
    type: String;
    /** Unique identifier for this result, 1-64 Bytes */
    id: String;
    /** Title of the result */
    title: String;
    /** Content of the message to be sent */
    input_message_content: InputMessageContent;
    /** [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** URL of the result */
    url?: String;
    /** Pass *True*, if you don't want the URL to be shown in the message */
    hide_url?: Boolean;
    /** Short description of the result */
    description?: String;
    /** Url of the thumbnail for the result */
    thumb_url?: String;
    /** Thumbnail width */
    thumb_width?: Integer;
    /** Thumbnail height */
    thumb_height?: Integer;
}
