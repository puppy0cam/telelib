import { Sticker } from "./_internals.mjs";
export const Array_of_Sticker = (value, token) => {
    "use strict";
    const result = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new Sticker(value[i], token);
    }
    return result;
};
