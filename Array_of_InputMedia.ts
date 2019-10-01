import { IInputMedia, InputMedia, Bot } from "./_internals.js";

export const Array_of_InputMedia = (value: IInputMedia[], token?: string | Bot) => {
    "use strict";
    const result: InputMedia[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new InputMedia(value[i], token);
    }
    return result;
}
