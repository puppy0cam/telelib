import String from "./String";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";
import Integer from "./Integer";

/**
 * Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use *input_message_content* to send a message with the specified content instead of the contact.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export default class InlineQueryResultContact implements IInlineQueryResultContact {
    constructor(data: IInlineQueryResultContact | InlineQueryResultContact, token?: string);
    public type: String;
    public id: String;
    public phone_number: String;
    public first_name: String;
    public last_name?: String;
    public vcard?: String;
    public reply_markup?: InlineKeyboardMarkup;
    public input_message_content?: InputMessageContent;
    public thumb_url?: String;
    public thumb_width?: Integer;
    public thumb_height?: Integer;
}

export interface IInlineQueryResultContact {
    /** Type of the result, must be *contact* */
    type: String;
    /** Unique identifier for this result, 1-64 Bytes */
    id: String;
    /** Contact's phone number */
    phone_number: String;
    /** Contact's first name */
    first_name: String;
    /** Contact's last name */
    last_name?: String;
    /** Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes */
    vcard?: String;
    /** [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the contact */
    input_message_content?: InputMessageContent;
    /** Url of the thumbnail for the result */
    thumb_url?: String;
    /** Thumbnail width */
    thumb_width?: Integer;
    /** Thumbnail height */
    thumb_height?: Integer;
}
