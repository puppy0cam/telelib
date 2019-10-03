"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const _internals_js_1 = require("./_internals.cjs");
exports.isFile = (value) => {
    "use strict";
    return value instanceof stream_1.Stream || _internals_js_1.IsBuffer(value);
};
