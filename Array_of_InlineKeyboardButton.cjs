"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
exports.Array_of_InlineKeyboardButton = (data, token) => {
    "use strict";
    const result = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
        result[i] = new _internals_js_1.InlineKeyboardButton(data[i], token);
    }
    return result;
};
