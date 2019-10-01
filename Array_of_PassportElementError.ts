import { IPassportElementError, PassportElementError, Bot } from "./_internals.js";

export const Array_of_PassportElementError = (value: IPassportElementError[], token?: string | Bot) => {
    "use strict";
    const result: PassportElementError[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new PassportElementError(value[i], token);
    }
    return result;
}
