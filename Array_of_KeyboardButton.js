"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
exports.Array_of_KeyboardButton = (value, token) => {
    "use strict";
    const result = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new _internals_js_1.KeyboardButton(value[i], token);
    }
    return result;
};
