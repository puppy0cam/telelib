import { PhotoSize, IPhotoSize, Array_of_PhotoSize, Bot } from "./_internals.js";

export const Array_of_Array_of_PhotoSize = (value: IPhotoSize[][], token?: string | Bot) => {
    "use strict";
    const result: PhotoSize[][] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = Array_of_PhotoSize(value[i], token);
    }
    return result;
}
