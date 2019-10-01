import { Bot, PhotoSize } from "./_internals.js";

/** This object represents a chat photo. */
export class ChatPhoto extends Bot implements IChatPhoto {
    constructor(data: IChatPhoto, token?: string | Bot) {
        "use strict";
        super(data, token);
    }
    public small_file_id!: string;
    public big_file_id!: string;
    /**
     * To PhotoSize objects that you can each use getFile on.
     */
    public toPhotoSizes(): [PhotoSize, PhotoSize] {
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

/** This object represents a chat photo. */
export interface IChatPhoto {
    /** Unique file identifier of small (160x160) chat photo. This file_id can be used only for photo download. */
    small_file_id: string;
    /** Unique file identifier of big (640x640) chat photo. This file_id can be used only for photo download. */
    big_file_id: string;
}
