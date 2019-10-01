import { IPassportFile, PassportFile, Bot } from "./_internals.js";

export const Array_of_PassportFile = (value: IPassportFile[], token?: string | Bot) => {
    "use strict";
    const result: PassportFile[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new PassportFile(value[i], token);
    }
    return result;
}
