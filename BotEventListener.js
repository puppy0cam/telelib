"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
class BotEventListener {
    constructor(type, callback, ...filters) {
        if (typeof type === "string") {
            this.type = type;
        }
        else if (type != null) {
            throw new TypeError("Event type was not valid");
        }
        if (typeof callback === "function") {
            this.callback = callback;
        }
        else if (callback != null) {
            throw new TypeError("callback was not a function");
        }
        const _filters = [];
        for (let i = 0; i < filters.length; i++) {
            const value = filters[i];
            if (i === 0 && typeof value === "string") {
                if (value.startsWith("/")) {
                    this.command = value;
                }
                else {
                    this.command = "/" + value;
                }
            }
            else if (typeof value === "function" || typeof value === "boolean" || (typeof value === "object" && value.then)) {
                _filters.push(value);
            }
            else if (value != null) {
                throw new TypeError("Invalid filter");
            }
        }
        this.filters = _filters;
    }
    callback(data, bot) {
        "use strict";
        throw new Error("Callback was not specified");
    }
    getContentFromUpdate(update) {
        "use strict";
        const type = this.type;
        if (type) {
            return update[type];
        }
        return update;
    }
    async passEvent(update, bot) {
        "use strict";
        const { filters, command, } = this;
        const eventContent = this.getContentFromUpdate(update);
        if (eventContent != null) {
            let cache = UpdateFilterCache.get(update);
            if (cache === undefined) {
                cache = new WeakMap();
                UpdateFilterCache.set(update, cache);
            }
            if (eventContent instanceof _internals_js_1.Message && typeof command === "string") {
                const entities = eventContent.getMessageEntities();
                const text = eventContent.getMessageText();
                if (entities != null && text != null) {
                    let checkedStartingCommand = false;
                    for (let i = 0; i < entities.length; i++) {
                        const entity = entities[i];
                        const { length, offset, type, } = entity;
                        if (type === "bot_command" && offset === 0) {
                            checkedStartingCommand = true;
                            const bot_command = text.slice(offset, offset + length);
                            const [commandSent, botUsername] = bot_command.split("@");
                            if (commandSent.startsWith(command)) {
                                if (eventContent.chat.type !== "private" && typeof botUsername === "string") {
                                    const bot_account = await bot.getMe();
                                    if (bot_account.username && bot_account.username.toLowerCase() !== botUsername.toLowerCase()) {
                                        return;
                                    }
                                }
                            }
                            else {
                                return;
                            }
                        }
                    }
                    if (!checkedStartingCommand) {
                        return;
                    }
                }
                else {
                    return;
                }
            }
            const pendingFilters = [];
            for (let i = 0; i < filters.length; i++) {
                const filter = filters[i];
                let filterResult;
                if (typeof filter === "function") {
                    const cachedResult = cache.get(filter);
                    if (cachedResult === undefined) {
                        filterResult = filter(eventContent, bot);
                        cache.set(filter, filterResult);
                    }
                    else {
                        filterResult = cachedResult;
                    }
                }
                else {
                    filterResult = filter;
                }
                if (filterResult === false) {
                    return;
                }
                else if (filterResult !== true) {
                    pendingFilters.push(filterResult);
                }
            }
            const filtersWaited = await Promise.all(pendingFilters);
            for (let i = 0; i < filtersWaited.length; i++) {
                if (filtersWaited[i] === false) {
                    return;
                }
            }
            let updateCache = HasReceivedUpdateCache.get(update);
            if (!updateCache) {
                updateCache = new WeakMap();
                HasReceivedUpdateCache.set(update, updateCache);
            }
            if (updateCache.has(this.callback)) {
                return updateCache.get(this.callback);
            }
            else {
                const finalResult = this.callback(eventContent, bot);
                updateCache.set(this.callback, finalResult);
                return finalResult;
            }
        }
        else {
            return;
        }
    }
}
exports.BotEventListener = BotEventListener;
const UpdateFilterCache = new WeakMap();
const HasReceivedUpdateCache = new WeakMap();
