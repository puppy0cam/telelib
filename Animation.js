import { File, PhotoSize } from "./_internals.js";
/** This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound). */
export class Animation extends File {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.thumb) {
            this.thumb = new PhotoSize(this.thumb, this);
        }
    }
    sendAnimation(options, timeout) {
        "use strict";
        return super.sendAnimation({
            animation: this.file_id,
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
