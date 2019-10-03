import { Bot, PhotoSize } from "./_internals.js";
/** This object represents a chat photo. */
export class ChatPhoto extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
    /**
     * To PhotoSize objects that you can each use getFile on.
     */
    toPhotoSizes() {
        "use strict";
        return [
            new PhotoSize({
                file_id: this.small_file_id,
                height: 160,
                width: 160,
            }, this),
            new PhotoSize({
                file_id: this.big_file_id,
                height: 640,
                width: 640,
            }, this),
        ];
    }
}
