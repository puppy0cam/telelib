import { IInlineQueryResult, InlineQueryResult, Bot } from "./_internals.js";

export const Array_of_InlineQueryResult = (value: IInlineQueryResult[], token?: string | Bot) => {
    "use strict";
    const result: InlineQueryResult[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new InlineQueryResult(value[i], token);
    }
    return result;
}
