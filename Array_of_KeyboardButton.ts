import { IKeyboardButton, KeyboardButton, Bot } from "./_internals.js";

export const Array_of_KeyboardButton = (value: IKeyboardButton[], token?: string | Bot) => {
    "use strict";
    const result: KeyboardButton[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new KeyboardButton(value[i], token);
    }
    return result;
}
