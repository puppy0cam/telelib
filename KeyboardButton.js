import KeyboardButtonObject from "./KeyboardButtonObject.js";
import String from "./String.js";

export default function KeyboardButton(value, _token) {
    "use strict";
    switch (typeof value) {
        case "string":
            return String(value);
        default:
            if (value.request_contact || value.request_location) {
                return new KeyboardButtonObject(value, _token);
            } else {
                return new KeyboardButtonObject(value.text, _token)
            }
    }
}
