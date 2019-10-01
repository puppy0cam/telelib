import { IMessage, Message, Bot } from "./_internals.js";

export const Array_of_Message = (value: IMessage[], token?: string | Bot) => {
    "use strict";
    const result: Message[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new Message(value[i], token);
    }
    return result;
}
