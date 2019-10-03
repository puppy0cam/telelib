"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
exports.Message_or_True = (value, token) => {
    "use strict";
    switch (typeof value) {
        case "boolean":
            return _internals_js_1.True(value);
        case "object":
            return new _internals_js_1.Message(value, token);
        default:
            throw new TypeError("value is not an object or a boolean");
    }
};
