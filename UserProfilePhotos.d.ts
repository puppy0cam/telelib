import { Bot, IPhotoSize, PhotoSize } from "./_internals.js";
/** This object represent a user's profile pictures. */
export declare class UserProfilePhotos extends Bot implements IUserProfilePhotos {
    constructor(data: IUserProfilePhotos, token?: string | Bot);
    total_count: number;
    photos: PhotoSize[][];
}
/** This object represent a user's profile pictures. */
export interface IUserProfilePhotos {
    /** Total number of profile pictures the target user has */
    total_count: number;
    /** Requested profile pictures (in up to 4 sizes each) */
    photos: IPhotoSize[][];
}
