"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
exports.createNetworkRequest = async (token, method, options, timeout) => {
    "use strict";
    options = options || {};
    while (true) {
        const start = _internals_js_1.DateNow();
        const result = await _internals_js_1.sendFormDataRequest(token, method, options, timeout);
        if (result.ok) {
            return result.result;
        }
        else if (result.parameters && result.parameters.retry_after) {
            const retry_after = result.parameters.retry_after * 1000;
            if (timeout - retry_after - _internals_js_1.DateNow() + start > 0) {
                await _internals_js_1.wait(retry_after);
            }
            else {
                throw result;
            }
        }
        else {
            throw result;
        }
    }
};
