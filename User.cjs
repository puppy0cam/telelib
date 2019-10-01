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
            const key = `${botId}_${content.id}`;
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
/** This object represents a Telegram user or bot. */
class User extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        const cachedValue = cacheHandler(this);
        if (cachedValue) {
            return cachedValue;
        }
    }
    ;
    addStickerToSet(options, timeout) {
        "use strict";
        return super.addStickerToSet({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    createNewStickerSet(options, timeout) {
        "use strict";
        return super.createNewStickerSet({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    getChatMember(options, timeout) {
        "use strict";
        return super.getChatMember({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    getGameHighScores(options, timeout) {
        "use strict";
        return super.getGameHighScores({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    getUserProfilePhotos(options, timeout) {
        "use strict";
        return super.getUserProfilePhotos({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    kickChatMember(options, timeout) {
        "use strict";
        return super.kickChatMember({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    promoteChatMember(options, timeout) {
        "use strict";
        return super.promoteChatMember({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    restrictChatMember(options, timeout) {
        "use strict";
        return super.restrictChatMember({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    setGameScore(options, timeout) {
        "use strict";
        return super.setGameScore({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    setPassportDataErrors(options, timeout) {
        "use strict";
        return super.setPassportDataErrors({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    unbanChatMember(options, timeout) {
        "use strict";
        return super.unbanChatMember({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    /** Use this method to upload a .png file with a sticker for later use in *createNewStickerSet* and *addStickerToSet* methods (can be used multiple times). Returns the uploaded [File](https://core.telegram.org/bots/api#file) on success. */
    uploadStickerFile(options, timeout) {
        "use strict";
        return super.uploadStickerFile({
            user_id: this.id,
            ...options,
        }, timeout);
    }
}
exports.User = User;
