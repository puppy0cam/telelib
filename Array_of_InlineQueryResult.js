import { InlineQueryResult } from "./_internals.js";
export const Array_of_InlineQueryResult = (value, token) => {
    "use strict";
    const result = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new InlineQueryResult(value[i], token);
    }
    return result;
};
