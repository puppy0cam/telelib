import { Bot } from "./_internals.mjs";
import request from "request-promise";
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
            const key = `${botId}_${content.file_id}`;
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
 * This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api#getfile).
 * >Maximum file size to download is 20 MB
 */
export class File extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        return cacheHandler(this, this._getBotId());
    }
    getFile(options, timeout) {
        "use strict";
        return super.getFile({
            file_id: this.file_id,
            ...options,
        }, timeout);
    }
    async downloadFile() {
        "use strict";
        if (this.file_path) {
            return await request(`https://api.telegram.org/bot${botTokenRetriever(this)}/${this.file_path}`);
        }
        else {
            throw new Error("File path does not exist");
        }
    }
}
const botTokenRetriever = File.tokenRetrieverCallbackForFileDownload;
