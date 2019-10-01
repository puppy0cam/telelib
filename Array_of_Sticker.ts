import { ISticker, Sticker, Bot } from "./_internals.js";

export const Array_of_Sticker = (value: ISticker[], token?: string | Bot) => {
    "use strict";
    const result: Sticker[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new Sticker(value[i], token);
    }
    return result;
}
