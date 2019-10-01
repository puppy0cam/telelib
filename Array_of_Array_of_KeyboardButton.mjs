import { Array_of_KeyboardButton } from "./_internals.mjs";
export const Array_of_Array_of_KeyboardButton = (value, token) => {
    "use strict";
    const result = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = Array_of_KeyboardButton(value[i], token);
    }
    return result;
};
