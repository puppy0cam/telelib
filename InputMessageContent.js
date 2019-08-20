import InputContactMessageContent from "./InputContactMessageContent.js";
import InputLocationMessageContent from "./InputLocationMessageContent.js";
import InputTextMessageContent from "./InputTextMessageContent.js";
import InputVenueMessageContent from "./InputVenueMessageContent.js";

export default function InputMessageContent(value) {
    "use strict";
    if (value.message_text) {
        return new InputTextMessageContent(value);
    } else if (value.latitude) {
        if (value.title) {
            return new InputVenueMessageContent(value);
        } else {
            return new InputLocationMessageContent(value);
        }
    } else if (value.phone_number) {
        return new InputContactMessageContent(value);
    } else {
        throw new TypeError("Invalid InputMessageContent");
    }
}
