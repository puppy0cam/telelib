import { IMessageEntity, MessageEntity, Bot } from "./_internals.js";

export const Array_of_MessageEntity = (value: IMessageEntity[], token?: string | Bot) => {
    "use strict";
    const result: MessageEntity[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new MessageEntity(value[i], token);
    }
    return result;
}
