"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
exports.wait = (ms, resolveInto) => {
    "use strict";
    return new Promise(_internals_js_1.createPromiseCallbackForTimeout(ms, resolveInto));
};
