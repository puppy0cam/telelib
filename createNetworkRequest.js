import { wait, sendFormDataRequest, DateNow } from "./_internals.js";
export const createNetworkRequest = async (token, method, options, timeout) => {
    "use strict";
    options = options || {};
    while (true) {
        const start = DateNow();
        const result = await sendFormDataRequest(token, method, options, timeout);
        if (result.ok) {
            return result.result;
        }
        else if (result.parameters && result.parameters.retry_after) {
            const retry_after = result.parameters.retry_after * 1000;
            if (timeout - retry_after - DateNow() + start > 0) {
                await wait(retry_after);
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
