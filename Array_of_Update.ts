import { IUpdate, Update, Bot } from "./_internals.js";

export const Array_of_Update = (value: IUpdate[], token?: string | Bot) => {
    "use strict";
    const result: Update[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new Update(value[i], token);
    }
    return result;
}
