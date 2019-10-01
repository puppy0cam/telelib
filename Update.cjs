"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
const cacheHandler = (() => {
    if (typeof FinalizationGroup === "function" && typeof WeakRef === "function") {
        const cache = new Map();
        const cleanup = new FinalizationGroup(iterator => {
            "use strict";
            for (const key of iterator) {
                const ref = cache.get(key);
                if (ref && !ref.deref())
                    cache.delete(key);
            }
        });
        return (content, botId) => {
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
        };
    }
    return (content) => {
        "use strict";
        return content;
    };
})();
/**
 * This [object](https://core.telegram.org/bots/api#available-types) represents an incoming update.
 * At most **one** of the optional parameters can be present in any given update.
 */
class Update extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        const cachedInstance = cacheHandler(this, this._getBotId());
        if (cachedInstance !== this) {
            return cachedInstance; // We have a copy of this already that hasn't been garbage collected! We can skip everything else because of this!
        }
        const { message, edited_message, channel_post, edited_channel_post, inline_query, chosen_inline_result, callback_query, shipping_query, pre_checkout_query, poll, } = data;
        if (message) {
            this.message = new _internals_js_1.Message(message, this);
        }
        if (edited_message) {
            this.edited_message = new _internals_js_1.Message(edited_message, this);
        }
        if (channel_post) {
            this.channel_post = new _internals_js_1.Message(channel_post, this);
        }
        if (edited_channel_post) {
            this.edited_channel_post = new _internals_js_1.Message(edited_channel_post, this);
        }
        if (inline_query) {
            this.inline_query = new _internals_js_1.InlineQuery(inline_query, this);
        }
        if (chosen_inline_result) {
            this.chosen_inline_result = new _internals_js_1.ChosenInlineResult(chosen_inline_result, this);
        }
        if (callback_query) {
            this.callback_query = new _internals_js_1.CallbackQuery(callback_query, this);
        }
        if (shipping_query) {
            this.shipping_query = new _internals_js_1.ShippingQuery(shipping_query, this);
        }
        if (pre_checkout_query) {
            this.pre_checkout_query = new _internals_js_1.PreCheckoutQuery(pre_checkout_query, this);
        }
        if (poll) {
            this.poll = new _internals_js_1.Poll(poll, this);
        }
    }
    getUpdates(options, timeout) {
        "use strict";
        return super.getUpdates({
            offset: this.update_id + 1,
            ...options
        }, timeout);
    }
    ;
}
exports.Update = Update;
