import sendFormDataRequest from "./dynamicRequests/sendFormDataRequest.js";
import defaultRequestOptions from "../defaultRequestOptions.js";
import wait from "./dynamicRequests/wait.js";
export default async function createNetworkRequest(token, method, options, timeout) {
    "use strict";
    const start = Date.now();
    const result = await sendFormDataRequest(token, method, options || defaultRequestOptions, timeout);
    if (result.ok) {
        return result.result;
    } else if (result.parameters && result.parameters.retry_after) {
        const retry_after = result.parameters.retry_after * 1000;
        if (timeout - retry_after - Date.now() + start > 0) {
            console.log("Hit a rate limit");
            await wait(retry_after);
            return await createNetworkRequest(token, method, options, timeout - Date.now() + start);
        }
    }
    throw result;
}
export const bindCreateNetworkRequest = Function.prototype.bind.bind(createNetworkRequest, null);
