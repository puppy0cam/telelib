import { Message, True } from "./_internals.js";
export const Message_or_True = (value, token) => {
    "use strict";
    switch (typeof value) {
        case "boolean":
            return True(value);
        case "object":
            return new Message(value, token);
        default:
            throw new TypeError("value is not an object or a boolean");
    }
};
