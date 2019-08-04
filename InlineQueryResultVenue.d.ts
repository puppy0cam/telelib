import String from "./String";
import Float from "./Float";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";
import Integer from "./Integer";

/**
 * Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use *input_message_content* to send a message with the specified content instead of the venue.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export default class InlineQueryResultVenue implements IInlineQueryResultVenue {
    constructor(data: IInlineQueryResultVenue | InlineQueryResultVenue, token?: string);
    public type: String;
    public id: String;
    public latitude: Float;
    public longitude: Float;
    public title: String;
    public address: String;
    public foursquare_id?: String;
    public foursquare_type?: String;
    public reply_markup?: InlineKeyboardMarkup;
    public input_message_content?: InputMessageContent;
    public thumb_url?: String;
    public thumb_width?: Integer;
    public thumb_height?: Integer;
}

export interface IInlineQueryResultVenue {
    /** Type of the result, must be *venue* */
    type: String;
    /** Unique identifier for this result, 1-64 Bytes */
    id: String;
    /** Latitude of the venue location in degrees */
    latitude: Float;
    /** Longitude of the venue location in degrees */
    longitude: Float;
    /** Title of the venue */
    title: String;
    /** Address of the venue */
    address: String;
    /** Foursquare identifier of the venue if known */
    foursquare_id?: String;
    /** Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type?: String;
    /** [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the venue */
    input_message_content?: InputMessageContent;
    /** Url of the thumbnail for the result */
    thumb_url?: String;
    /** Thumbnail width */
    thumb_width?: Integer;
    /** Thumbnail height */
    thumb_height?: Integer;
}
