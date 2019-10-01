import { IUser, User, Bot } from "./_internals.js";

export const Array_of_User = (value: IUser[], token?: string | Bot) => {
    "use strict";
    const result: User[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new User(value[i], token);
    }
    return result;
}
