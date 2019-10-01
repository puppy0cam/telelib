import { Bot, Message, InlineQuery, ChosenInlineResult, CallbackQuery, ShippingQuery, PreCheckoutQuery, Poll, IMessage, IInlineQuery, IChosenInlineResult, ICallbackQuery, IShippingQuery, IPreCheckoutQuery, IPoll } from "./_internals.js";
/**
 * This [object](https://core.telegram.org/bots/api#available-types) represents an incoming update.
 * At most **one** of the optional parameters can be present in any given update.
 */
export declare class Update extends Bot implements IUpdate {
    constructor(data: IUpdate, token?: string | Bot);
    update_id: number;
    message?: Message;
    edited_message?: Message;
    channel_post?: Message;
    edited_channel_post?: Message;
    inline_query?: InlineQuery;
    chosen_inline_result?: ChosenInlineResult;
    callback_query?: CallbackQuery;
    shipping_query?: ShippingQuery;
    pre_checkout_query?: PreCheckoutQuery;
    poll?: Poll;
    getUpdates(options?: {
        /** Limits the number of updates to be retrieved. Values between 1—100 are accepted. Defaults to 100. */
        limit?: number;
        /** Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only. */
        timeout?: number;
        /**
         * List the types of updates you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See [Update](https://core.telegram.org/bots/api#update) for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.
         *
         * Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.
         */
        allowed_updates?: string[];
    }, timeout?: number): Promise<Update[]>;
}
/**
 * This [object](https://core.telegram.org/bots/api#available-types) represents an incoming update.
 * At most **one** of the optional parameters can be present in any given update.
 */
export interface IUpdate {
    /** The update‘s unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you’re using [Webhooks](https://core.telegram.org/bots/api#setwebhook), since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially. */
    update_id: number;
    /** New incoming message of any kind — text, photo, sticker, etc. */
    message?: IMessage;
    /** New version of a message that is known to the bot and was edited */
    edited_message?: IMessage;
    /** New incoming channel post of any kind — text, photo, sticker, etc. */
    channel_post?: IMessage;
    /** New version of a channel post that is known to the bot and was edited */
    edited_channel_post?: IMessage;
    /** New incoming [inline](https://core.telegram.org/bots/api#inline-mode) query */
    inline_query?: IInlineQuery;
    /** The result of an [inline](https://core.telegram.org/bots/api#inline-mode) query that was chosen by a user and sent to their chat partner. Please see our documentation on the [feedback collecting](https://core.telegram.org/bots/inline#collecting-feedback) for details on how to enable these updates for your bot. */
    chosen_inline_result?: IChosenInlineResult;
    /** New incoming callback query */
    callback_query?: ICallbackQuery;
    /** New incoming shipping query. Only for invoices with flexible price */
    shipping_query?: IShippingQuery;
    /** New incoming pre-checkout query. Contains full information about checkout */
    pre_checkout_query?: IPreCheckoutQuery;
    /** New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot */
    poll?: IPoll;
}
