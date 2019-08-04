import Message from "./Message.js";
import True from "./True.js";

export default function MessageOrTrue(value) {
    "use strict";
    switch (typeof value) {
        case "boolean":
            return True(value);
        default:
            return new Message(value);
    }
}
