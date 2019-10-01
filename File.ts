import { Bot } from "./_internals.js";
import request from "request-promise";

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
        return (content: File, botId?: number) => {
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
        }
    }
    return (content: File) => {
        "use strict";
        return content;
    };
})();

/**
 * This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api#getfile).
 * >Maximum file size to download is 20 MB
 */
export class File extends Bot implements IFile {
    constructor(data: IFile, token?: string | Bot) {
        "use strict";
        super(data, token);
        return cacheHandler(this, this._getBotId());
    }
    public file_id!: string;
    public file_size?: number;
    public file_path?: string;
    public getFile(options?: {}, timeout?: number): Promise<File> {
        "use strict";
        return super.getFile({
            file_id: this.file_id,
            ...options,
        }, timeout);
    }
    public async downloadFile() {
        "use strict";
        if (this.file_path) {
            return await request(`https://api.telegram.org/bot${botTokenRetriever(this)}/${this.file_path}`);
        } else {
            throw new Error("File path does not exist");
        }
    }
}
const botTokenRetriever = File.tokenRetrieverCallbackForFileDownload as (bot: Bot) => string;
/**
 * This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api#getfile).
 * >Maximum file size to download is 20 MB
 */
export interface IFile {
    /** Unique identifier for this file */
    file_id: string;
    /** File size, if known */
    file_size?: number;
    /** File path. Use `https://api.telegram.org/file/bot<token>/<file_path>` to get the file. */
    file_path?: string;
}
