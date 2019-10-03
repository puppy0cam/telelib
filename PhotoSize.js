import { Bot } from "./_internals.js";
/** This object represents on size of a photo or a [file](https://core.telegram.org/bots/api#document) / [sticker](https://core.telegram.org/bots/api#sticker) thumbnail */
export class PhotoSize extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
    sendPhoto(options, timeout) {
        "use strict";
        return super.sendPhoto({
            photo: this.file_id,
            ...options,
        }, timeout);
    }
    getFile(options, timeout) {
        "use strict";
        return super.getFile({
            file_id: this.file_id,
            ...options,
        }, timeout);
    }
}
