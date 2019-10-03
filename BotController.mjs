import { Bot, BotEventListener } from "./_internals.mjs";
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
        setInterval(() => {
            "use strict";
            for (const botRef of cache.values()) {
                const bot = botRef.deref();
                if (bot) {
                    bot.tick();
                }
            }
        }, 1000).unref();
        return (content, token) => {
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
        };
    }
    return (content) => {
        "use strict";
        return content;
    };
})();
export class BotController extends Bot {
    constructor(token) {
        "use strict";
        super(token);
        this.#tick = async function (options) {
            const { allowed_updates, limit, timeout, } = options || {};
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
        };
        this.#bot_should_tick = false;
        this.#eventListeners = new Set();
        const result = cacheHandler(this, TokenGetter(this));
        result.#botInformation = result.getMe();
    }
    getMe() {
        "use strict";
        if (this.#botInformation) {
            return this.#botInformation;
        }
        else {
            const request = super.getMe();
            this.#botInformation = request;
            return request;
        }
    }
    on() {
        "use strict";
        if (arguments[0] instanceof BotEventListener) {
            return arguments[0];
        }
        const listener = new BotEventListener(...arguments);
        this.#eventListeners.add(listener);
        return listener;
    }
    off(listener) {
        "use strict";
        return this.#eventListeners.delete(listener);
    }
    emit(update) {
        "use strict";
        const results = [];
        for (const listener of this.#eventListeners) {
            results.push(listener.passEvent(update, this));
        }
        return results;
    }
    tick(options) {
        "use strict";
        const pending_getUpdates_request = this.#pending_getUpdates_request;
        if (pending_getUpdates_request) {
            return pending_getUpdates_request;
        }
        else if (this.#bot_should_tick) {
            const result = this.#tick(options);
            this.#pending_getUpdates_request = result;
            return result;
        }
        else {
            return Promise.resolve(undefined);
        }
    }
    #tick;
    /**
     * Start the bot's getUpdates process.
     */
    start() {
        "use strict";
        this.#bot_should_tick = true;
        this.tick();
    }
    /**
     * Make the current getUpdates process be the last.
     */
    stop() {
        "use strict";
        this.#bot_should_tick = false;
    }
    #bot_should_tick;
    #pending_getUpdates_request;
    #highest_known_update_id;
    #botInformation;
    #eventListeners;
}
const TokenGetter = BotController.tokenRetrieverCallbackForFileDownload;
const onUncaughtErrorInUpdateEmission = (error) => {
    "use strict";
    console.warn("Uncaught error in update emission: ", error);
};
