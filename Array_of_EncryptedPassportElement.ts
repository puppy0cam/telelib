import { IEncryptedPassportElement, EncryptedPassportElement, Bot } from "./_internals.js";

export const Array_of_EncryptedPassportElement = (value: IEncryptedPassportElement[], token?: string | Bot) => {
    "use strict";
    const result: EncryptedPassportElement[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new EncryptedPassportElement(value[i], token);
    }
    return result;
}
