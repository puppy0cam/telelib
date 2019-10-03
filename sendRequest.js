"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
exports.sendRequest = (token, method, options, timeout) => {
    "use strict";
    timeout = timeout || 30000;
    return _internals_js_1.createNetworkRequest(token, method, options, timeout);
};
