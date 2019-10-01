import { Bot, Message, InlineQuery, ChosenInlineResult, CallbackQuery, ShippingQuery, PreCheckoutQuery, Poll, IMessage, IInlineQuery, IChosenInlineResult, ICallbackQuery, IShippingQuery, IPreCheckoutQuery, IPoll } from "./_internals.js";

const cacheHandler = (() => { // cache handler if available. See https://github.com/tc39/proposal-weakrefs for more info.
    if (typeof FinalizationGroup === "function" && typeof WeakRef === "function") {
        const cache = new Map();
        const cleanup = new FinalizationGroup(iterator => {
            "use strict";
            for (const key of iterator) {
                const ref = cache.get(key);
                if (ref && !ref.deref()) cache.delete(key);
            }
        });
        return (content: Update, botId?: number) => {
            "use strict";
            if (botId === undefined) {
                return content;
            }
            const key = `${botId}_${content.update_id}`;
            const ref = cache.get(key);
            if (ref) {
                const cached = ref.deref();
                if (cached !== undefined) {
                    return cached;
                }
            }
            cache.set(key, new WeakRef(content));
            cleanup.register(content, key);
            return content;
        }
    }
    return (content: Update) => {
        "use strict";
        return content;
    };
})();

/**
 * This [object](https://core.telegram.org/bots/api#available-types) represents an incoming update.
 * At most **one** of the optional parameters can be present in any given update.
 */
export class Update extends Bot implements IUpdate {
    public constructor(data: IUpdate, token?: string | Bot) {
        "use strict";
        super(data, token);
        const cachedInstance = cacheHandler(this, this._getBotId());
        if (cachedInstance !== this) {
            return cachedInstance; // We have a copy of this already that hasn't been garbage collected! We can skip everything else because of this!
        }
        const {
            message,
            edited_message,
            channel_post,
            edited_channel_post,
            inline_query,
            chosen_inline_result,
            callback_query,
            shipping_query,
            pre_checkout_query,
            poll,
        } = data;
        if (message) {
            this.message = new Message(message, this);
        }
        if (edited_message) {
            this.edited_message = new Message(edited_message, this);
        }
        if (channel_post) {
            this.channel_post = new Message(channel_post, this);
        }
        if (edited_channel_post) {
            this.edited_channel_post = new Message(edited_channel_post, this);
        }
        if (inline_query) {
            this.inline_query = new InlineQuery(inline_query, this);
        }
        if (chosen_inline_result) {
            this.chosen_inline_result = new ChosenInlineResult(chosen_inline_result, this);
        }
        if (callback_query) {
            this.callback_query = new CallbackQuery(callback_query, this);
        }
        if (shipping_query) {
            this.shipping_query = new ShippingQuery(shipping_query, this);
        }
        if (pre_checkout_query) {
            this.pre_checkout_query = new PreCheckoutQuery(pre_checkout_query, this);
        }
        if (poll) {
            this.poll = new Poll(poll, this);
        }
    }
    public update_id!: number;
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
    public getUpdates(options?: {
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
    }, timeout?: number): Promise<Update[]> {
        "use strict";
        return super.getUpdates({
            offset: this.update_id + 1,
            ...options
        }, timeout);
    };
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
