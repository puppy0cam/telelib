import { PhotoSize, File } from "./_internals.mjs";
/** This object represents an audio file to be treated as music by the Telegram clients. */
export class Audio extends File {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.thumb) {
            this.thumb = new PhotoSize(this.thumb, this);
        }
    }
    sendAudio(options, timeout) {
        "use strict";
        return super.sendAudio({
            audio: this.file_id,
            ...options,
        }, timeout);
    }
}
