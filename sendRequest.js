import { createNetworkRequest } from "./_internals.js";
export const sendRequest = (token, method, options, timeout) => {
    "use strict";
    timeout = timeout || 30000;
    return createNetworkRequest(token, method, options, timeout);
};
