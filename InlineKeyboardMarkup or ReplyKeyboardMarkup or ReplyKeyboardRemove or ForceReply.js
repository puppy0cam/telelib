import ForceReply from "./ForceReply.js";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup.js";
import ReplyKeyboardMarkup from "./ReplyKeyboardMarkup.js";
import ReplyKeyboardRemove from "./ReplyKeyboardRemove.js";

export default function InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply(value) {
    "use strict";
    if (value.inline_keyboard) {
        return new InlineKeyboardMarkup(value);
    } else if (value.keyboard) {
        return new ReplyKeyboardMarkup(value);
    } else if (value.remove_keyboard) {
        return new ReplyKeyboardRemove(value);
    } else if (value.force_reply) {
        return new ForceReply(value);
    } else {
        throw new TypeError("Value was not any of the possible types");
    }
}
