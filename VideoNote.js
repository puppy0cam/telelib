import { File, PhotoSize } from "./_internals.js";
/** This object represents a [video message](https://telegram.org/blog/video-messages-and-telescope) (available in Telegram apps as of [v.4.0](https://telegram.org/blog/video-messages-and-telescope)). */
export class VideoNote extends File {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.thumb) {
            this.thumb = new PhotoSize(this.thumb, this);
        }
    }
    sendVideoNote(options, timeout) {
        "use strict";
        return super.sendVideoNote({
            video_note: this.file_id,
            ...options,
        }, timeout);
    }
}
