import String from "./String";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/**
 * Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use *input_message_content* to send a message with the specified content instead of the sticker.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export default class InlineQueryResultCachedSticker implements IInlineQueryResultCachedSticker {
    constructor(data: IInlineQueryResultCachedSticker | InlineQueryResultCachedSticker, token?: string);
    public type: String;
    public id: String;
    public sticker_file_id: String;
    public reply_markup?: InlineKeyboardMarkup;
    public input_message_content?: InputMessageContent;
}

export interface IInlineQueryResultCachedSticker {
    /** Type of the result, must be *sticker* */
    type: String;
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid file identifier of the sticker */
    sticker_file_id: String;
    /** [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the sticker */
    input_message_content?: InputMessageContent;
}
