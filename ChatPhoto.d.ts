import { Bot, PhotoSize } from "./_internals.js";
/** This object represents a chat photo. */
export declare class ChatPhoto extends Bot implements IChatPhoto {
    constructor(data: IChatPhoto, token?: string | Bot);
    small_file_id: string;
    big_file_id: string;
    /**
     * To PhotoSize objects that you can each use getFile on.
     */
    toPhotoSizes(): [PhotoSize, PhotoSize];
}
/** This object represents a chat photo. */
export interface IChatPhoto {
    /** Unique file identifier of small (160x160) chat photo. This file_id can be used only for photo download. */
    small_file_id: string;
    /** Unique file identifier of big (640x640) chat photo. This file_id can be used only for photo download. */
    big_file_id: string;
}
