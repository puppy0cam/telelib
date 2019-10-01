import { IPhotoSize, PhotoSize, Bot } from "./_internals.js";

export const Array_of_PhotoSize = (value: IPhotoSize[], token?: string | Bot) => {
    "use strict";
    const result: PhotoSize[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new PhotoSize(value[i], token);
    }
    return result;
}
