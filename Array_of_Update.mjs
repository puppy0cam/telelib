import { Update } from "./_internals.mjs";
export const Array_of_Update = (value, token) => {
    "use strict";
    const result = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new Update(value[i], token);
    }
    return result;
};
