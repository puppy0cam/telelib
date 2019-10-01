import { Bot, IInlineKeyboardButton, InlineKeyboardButton } from "./_internals.js";

export const Array_of_InlineKeyboardButton = (data: IInlineKeyboardButton[], token?: string | Bot) => {
    "use strict";
    const result: InlineKeyboardButton[] = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
        result[i] = new InlineKeyboardButton(data[i], token);
    }
    return result;
}
