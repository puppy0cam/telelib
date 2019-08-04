import String from "./String";
import Float_number from "./Float number";
import Integer from "./Integer";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/**
 * Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use *input_message_content* to send a message with the specified content instead of the location.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export default class InlineQueryResultLocation implements IInlineQueryResultLocation {
    constructor(data: IInlineQueryResultLocation | InlineQueryResultLocation, token?: string);
    public type: String;
    public id: String;
    public latitude: Float_number;
    public longitude: Float_number;
    public title: String;
    public live_period?: Integer;
    public reply_markup?: InlineKeyboardMarkup;
    public input_message_content?: InputMessageContent;
    public thumb_url?: String;
    public thumb_width?: Integer;
    public thumb_height?: Integer;
}

export interface IInlineQueryResultLocation {
    /** Type of the result, must be *location* */
    type: String;
    /** Unique identifier for this result, 1-64 Bytes */
    id: String;
    /** Location latitude in degrees */
    latitude: Float_number;
    /** Location longitude in degrees */
    longitude: Float_number;
    /** Location title */
    title: String;
    /** Period in seconds for which the location can be updated, should be between 60 and 86400. */
    live_period?: Integer;
    /** [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the location */
    input_message_content?: InputMessageContent;
    /** Url of the thumbnail for the result */
    thumb_url?: String;
    /** Thumbnail width */
    thumb_width?: Integer;
    /** Thumbnail height */
    thumb_height?: Integer;
}
