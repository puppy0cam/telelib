import String from "./String";
import PhotoSize from "./PhotoSize";

/** This object represents a chat photo. */
export default class ChatPhoto implements IChatPhoto {
    constructor(data: IChatPhoto | ChatPhoto, token?: string);
    public small_file_id: String;
    public big_file_id: String;
    /**
     * To PhotoSize objects that you can each use getFile on.
     */
    public toPhotoSizes(): [PhotoSize, PhotoSize];
}

export interface IChatPhoto {
    /** Unique file identifier of small (160x160) chat photo. This file_id can be used only for photo download. */
    small_file_id: String;
    /** Unique file identifier of big (640x640) chat photo. This file_id can be used only for photo download. */
    big_file_id: String;
}
