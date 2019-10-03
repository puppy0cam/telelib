import { Array_of_PhotoSize } from "./_internals.js";
export const Array_of_Array_of_PhotoSize = (value, token) => {
    "use strict";
    const result = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = Array_of_PhotoSize(value[i], token);
    }
    return result;
};
