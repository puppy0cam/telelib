import { IChatMember, ChatMember, Bot } from "./_internals.js";

export const Array_of_ChatMember = (value: IChatMember[], token?: string | Bot) => {
    "use strict";
    const result: ChatMember[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new ChatMember(value[i], token);
    }
    return result;
}
