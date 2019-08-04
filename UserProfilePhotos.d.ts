import Integer from "./Integer";
import Array_of_Array_of_PhotoSize from "./Array of Array of PhotoSize";

/** This object represent a user's profile pictures. */
export default class UserProfilePhotos implements IUserProfilePhotos {
    constructor(data: IUserProfilePhotos | UserProfilePhotos, token?: string);
    public total_count: Integer;
    public photos: Array_of_Array_of_PhotoSize;
}

export interface IUserProfilePhotos {
    /** Total number of profile pictures the target user has */
    total_count: Integer;
    /** Requested profile pictures (in up to 4 sizes each) */
    photos: Array_of_Array_of_PhotoSize;
}
