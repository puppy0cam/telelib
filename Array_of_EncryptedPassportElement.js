import { EncryptedPassportElement } from "./_internals.js";
export const Array_of_EncryptedPassportElement = (value, token) => {
    "use strict";
    const result = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new EncryptedPassportElement(value[i], token);
    }
    return result;
};
