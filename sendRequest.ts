import { createNetworkRequest } from "./_internals.js";

export const sendRequest = (token: string, method: string, options?: any, timeout?: number) => {
    "use strict";
    timeout = timeout || 30000;
    return createNetworkRequest(token, method, options, timeout);
}
