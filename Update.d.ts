import Array_of_String from "./Array of String";
import Array_of_Update from "./Array of Update";
import CallbackQuery from "./CallbackQuery";
import ChosenInlineResult from "./ChosenInlineResult";
import InlineQuery from "./InlineQuery";
import Integer from "./Integer";
import Message from "./Message";
import Poll from "./Poll";
import PreCheckoutQuery from "./PreCheckoutQuery";
import ShippingQuery from "./ShippingQuery";

/**
 * This [object](https://core.telegram.org/bots/api#available-types) represents an incoming update.
 * At most **one** of the optional parameters can be present in any given update.
 */
export default class Update implements IUpdate {
    constructor(data: IUpdate | Update, token?: string);
    public update_id: Integer;
    public message?: Message;
    public edited_message?: Message;
    public channel_post?: Message;
    public edited_channel_post?: Message;
    public inline_query?: InlineQuery;
    public chosen_inline_result?: ChosenInlineResult;
    public callback_query?: CallbackQuery;
    public shipping_query?: ShippingQuery;
    public pre_checkout_query?: PreCheckoutQuery;
    public poll?: Poll;
    /**
     * Use this method to receive incoming updates using long polling ([wiki](http://en.wikipedia.org/wiki/Push_technology#Long_polling)). An Array of [Update](https://core.telegram.org/bots/api#update) objects is returned.
     * >**Notes**
     * 1. This method will not work if an outgoing webhook is set up.
     * 2. In order to avoid getting duplicate updates, recalculate *offset* after each server response.
     */
    public getUpdates(options?: {
        /** Limits the number of updates to be retrieved. Values between 1—100 are accepted. Defaults to 100. */
        limit?: Integer;
        /** Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only. */
        timeout?: Integer;
        /**
         * List the types of updates you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See [Update](https://core.telegram.org/bots/api#update) for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.
         *
         * Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.
         */
        allowed_updates?: Array_of_String;
    }): Promise<Array_of_Update>;
}

export interface IUpdate {
    /** The update‘s unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you’re using [Webhooks](https://core.telegram.org/bots/api#setwebhook), since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially. */
    update_id: Integer;
    /** New incoming message of any kind — text, photo, sticker, etc. */
    message?: Message;
    /** New version of a message that is known to the bot and was edited */
    edited_message?: Message;
    /** New incoming channel post of any kind — text, photo, sticker, etc. */
    channel_post?: Message;
    /** New version of a channel post that is known to the bot and was edited */
    edited_channel_post?: Message;
    /** New incoming [inline](https://core.telegram.org/bots/api#inline-mode) query */
    inline_query?: InlineQuery;
    /** The result of an [inline](https://core.telegram.org/bots/api#inline-mode) query that was chosen by a user and sent to their chat partner. Please see our documentation on the [feedback collecting](https://core.telegram.org/bots/inline#collecting-feedback) for details on how to enable these updates for your bot. */
    chosen_inline_result?: ChosenInlineResult;
    /** New incoming callback query */
    callback_query?: CallbackQuery;
    /** New incoming shipping query. Only for invoices with flexible price */
    shipping_query?: ShippingQuery;
    /** New incoming pre-checkout query. Contains full information about checkout */
    pre_checkout_query?: PreCheckoutQuery;
    /** New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot */
    poll?: Poll;
}
