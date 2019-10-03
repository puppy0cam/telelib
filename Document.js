import { File, PhotoSize } from "./_internals.js";
/** This object represents a general file (as opposed to [photos](https://core.telegram.org/bots/api#photosize), [voice messages](https://core.telegram.org/bots/api#voice) and [audio files](https://core.telegram.org/bots/api#audio)). */
export class Document extends File {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.thumb) {
            this.thumb = new PhotoSize(this.thumb, this);
        }
    }
    sendDocument(options, timeout) {
        "use strict";
        return super.sendDocument({
            document: this.file_id,
            ...options,
        }, timeout);
    }
}
