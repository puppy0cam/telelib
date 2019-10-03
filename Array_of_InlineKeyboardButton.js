import { InlineKeyboardButton } from "./_internals.js";
export const Array_of_InlineKeyboardButton = (data, token) => {
    "use strict";
    const result = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
        result[i] = new InlineKeyboardButton(data[i], token);
    }
    return result;
};
