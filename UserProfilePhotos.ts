import { Array_of_Array_of_PhotoSize, Bot, IPhotoSize, PhotoSize } from "./_internals.js";

/** This object represent a user's profile pictures. */
export class UserProfilePhotos extends Bot implements IUserProfilePhotos {
    constructor(data: IUserProfilePhotos, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.photos) {
            this.photos = Array_of_Array_of_PhotoSize(this.photos, this);
        }
    }
    public total_count!: number;
    public photos!: PhotoSize[][];
}

/** This object represent a user's profile pictures. */
export interface IUserProfilePhotos {
    /** Total number of profile pictures the target user has */
    total_count: number;
    /** Requested profile pictures (in up to 4 sizes each) */
    photos: IPhotoSize[][];
}
