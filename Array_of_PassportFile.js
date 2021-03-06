import { PassportFile } from "./_internals.js";
export const Array_of_PassportFile = (value, token) => {
    "use strict";
    const result = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new PassportFile(value[i], token);
    }
    return result;
};
