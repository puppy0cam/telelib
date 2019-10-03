import { Message, Bot, User, Update, InlineQuery, ChosenInlineResult, CallbackQuery, ShippingQuery, PreCheckoutQuery, Poll, BotEventListener } from "./_internals.js";

const cacheHandler: (content: BotController, token: string) => BotController = (() => { // cache handler if available. See https://github.com/tc39/proposal-weakrefs for more info.
    if (typeof FinalizationGroup === "function" && typeof WeakRef === "function") {
        const cache = new Map<string, WeakRef<BotController>>();
        const cleanup = new FinalizationGroup<any>(iterator => {
            "use strict";
            for (const key of iterator) {
                const ref = cache.get(key);
                if (ref && !ref.deref()) cache.delete(key);
            }
        });
        setInterval(() => {
            "use strict";
            for (const botRef of cache.values()) {
                const bot = botRef.deref();
                if (bot) {
                    bot.tick();
                }
            }
        }, 1000).unref();
        return (content: BotController, token: string) => {
            "use strict";
            const ref = cache.get(token);
            if (ref) {
                const cached = ref.deref();
                if (cached !== undefined) {
                    return cached;
                }
            }
            cache.set(token, new WeakRef(content));
            cleanup.register(content, token);
            return content;
        }
    }
    return (content: BotController) => {
        "use strict";
        return content;
    };
})();

export class BotController extends Bot {
    public constructor(token: string | Bot) {
        "use strict";
        super(token);
        const result = cacheHandler(this, TokenGetter(this));
        result.#botInformation = result.getMe();
    }
    public getMe(): Promise<User> {
        "use strict";
        if (this.#botInformation) {
            return this.#botInformation;
        } else {
            const request = super.getMe();
            this.#botInformation = request;
            return request;
        }
    }
    public on(type: "message" | "edited_message" | "channel_post" | "edited_channel_post", callback: (message: Message, bot: BotController) => void | PromiseLike<void>, command?: string, ...filters: Array<boolean | PromiseLike<boolean> | ((message: Message, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<Message>;
    public on(type: "message" | "edited_message" | "channel_post" | "edited_channel_post", callback: (message: Message, bot: BotController) => void | PromiseLike<void>, ...filters: Array<boolean | PromiseLike<boolean> | ((message: Message, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<Message>;
    public on(type: "chosen_inline_result", callback: (chosenInlineResult: ChosenInlineResult, bot: BotController) => void | PromiseLike<void>, ...filters: Array<boolean | PromiseLike<boolean> | ((chosenInlineResult: ChosenInlineResult, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<ChosenInlineResult>;
    public on(type: "inline_query", callback: (inlineQuery: InlineQuery, bot: BotController) => void | PromiseLike<void>, ...filters: Array<boolean | PromiseLike<boolean> | ((inlineQuery: InlineQuery, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<InlineQuery>;
    public on(type: "callback_query", callback: (callbackQuery: CallbackQuery, bot: BotController) => void | PromiseLike<void>, ...filters: Array<boolean | PromiseLike<boolean> | ((callbackQuery: CallbackQuery, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<CallbackQuery>;
    public on(type: "shipping_query", callback: (shippingQuery: ShippingQuery, bot: BotController) => void | PromiseLike<void>, ...filters: Array<boolean | PromiseLike<boolean> | ((shippingQuery: ShippingQuery, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<ShippingQuery>;
    public on(type: "pre_checkout_query", callback: (preCheckoutQuery: PreCheckoutQuery, bot: BotController) => void | PromiseLike<void>, ...filters: Array<boolean | PromiseLike<boolean> | ((preCheckoutQuery: PreCheckoutQuery, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<PreCheckoutQuery>;
    public on(type: "poll", callback: (poll: Poll, bot: BotController) => void | PromiseLike<void>, ...filters: Array<boolean | PromiseLike<boolean> | ((poll: Poll, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<Poll>;
    public on(callback: (update: Update, bot: BotController) => void | PromiseLike<void>, ...filters: Array<boolean | PromiseLike<boolean> | ((update: Update, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<Update>;
    public on<T>(listener: BotEventListener<T>): BotEventListener<T>;
    public on(): BotEventListener<any> {
        "use strict";
        if (arguments[0] instanceof BotEventListener) {
            return arguments[0];
        }
        const listener = new BotEventListener(...arguments);
        this.#eventListeners.add(listener);
        return listener;
    }
    public off(listener: BotEventListener<any>): boolean {
        "use strict";
        return this.#eventListeners.delete(listener);
    }
    public emit(update: Update): Array<Promise<void>> {
        "use strict";
        const results = [];
        for (const listener of this.#eventListeners) {
            results.push(listener.passEvent(update, this));
        }
        return results;
    }
    public tick(options?: Parameters<typeof Update["prototype"]["getUpdates"]>[0]) {
        "use strict";
        const pending_getUpdates_request = this.#pending_getUpdates_request;
        if (pending_getUpdates_request) {
            return pending_getUpdates_request;
        } else if (this.#bot_should_tick) {
            const result = this.#tick(options);
            this.#pending_getUpdates_request = result;
            return result;
        } else {
            return Promise.resolve(undefined as void);
        }
    }
    #tick = async function(this: BotController, options?: Parameters<typeof Update["prototype"]["getUpdates"]>[0]): Promise<void> {
        const {
            allowed_updates,
            limit,
            timeout,
        } = options || {};
        let highest_known_update_id = this.#highest_known_update_id;
        const offset = highest_known_update_id ? highest_known_update_id + 1 : highest_known_update_id;
        const updates = await this.getUpdates({
            allowed_updates,
            limit,
            offset,
            timeout,
        });
        for (let i = 0; i < updates.length; i++) {
            if (updates[i].update_id > (highest_known_update_id || 0)) {
                highest_known_update_id = updates[i].update_id;
            }
            const promises = this.emit(updates[i]);
            for (let j = 0; j < promises.length; j++) {
                promises[j].catch(onUncaughtErrorInUpdateEmission);
            }
        }
        this.#highest_known_update_id = highest_known_update_id;
        if (this.#bot_should_tick) {
            return this.#tick(options);
        }
    }
    /**
     * Start the bot's getUpdates process.
     */
    public start(): void {
        "use strict";
        this.#bot_should_tick = true;
        this.tick();
    }
    /**
     * Make the current getUpdates process be the last.
     */
    public stop(): void {
        "use strict";
        this.#bot_should_tick = false;
    }
    #bot_should_tick: boolean = false;
    #pending_getUpdates_request?: Promise<void>;
    #highest_known_update_id?: number;
    #botInformation: Promise<User>;
    #eventListeners: Set<BotEventListener<any>> = new Set();
}
const TokenGetter = BotController.tokenRetrieverCallbackForFileDownload;
const onUncaughtErrorInUpdateEmission = (error : any) => {
    "use strict";
    console.warn("Uncaught error in update emission: ", error);
}
