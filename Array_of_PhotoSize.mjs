import { PhotoSize } from "./_internals.mjs";
export const Array_of_PhotoSize = (value, token) => {
    "use strict";
    const result = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new PhotoSize(value[i], token);
    }
    return result;
};
