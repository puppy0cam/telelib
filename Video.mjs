import { File } from "./_internals.mjs";
/** This object represents a video file. */
export class Video extends File {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
    sendVideo(options, timeout) {
        "use strict";
        return super.sendVideo({
            video: this.file_id,
            ...options,
        }, timeout);
    }
}
