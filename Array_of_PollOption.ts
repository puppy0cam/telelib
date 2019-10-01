import { IPollOption, PollOption, Bot } from "./_internals.js";

export const Array_of_PollOption = (value: IPollOption[], token?: string | Bot) => {
    "use strict";
    const result: PollOption[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new PollOption(value[i], token);
    }
    return result;
}
