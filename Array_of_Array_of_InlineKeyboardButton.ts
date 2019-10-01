import { InlineKeyboardButton, IInlineKeyboardButton, Array_of_InlineKeyboardButton, Bot } from "./_internals.js";

export const Array_of_Array_of_InlineKeyboardButton = (value: IInlineKeyboardButton[][], token?: string | Bot) => {
    "use strict";
    const result: InlineKeyboardButton[][] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = Array_of_InlineKeyboardButton(value[i], token);
    }
    return result;
}
