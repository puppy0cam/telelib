import createNetworkRequest from "./createNetworkRequest.js";

export default async function sendRequest(token, method, options, timeout) {
    "use strict";
    timeout = timeout || 30000;
    return await createNetworkRequest(token, method, options, timeout);
}
