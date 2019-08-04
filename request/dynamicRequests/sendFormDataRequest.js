import request from "request";
import agent from "../HttpsAgent.js";
import prepareFormRequestOptions from "./prepareFormRequestOptions.js";

export default function sendFormDataRequest(token, method, content, timeout) {
    "use strict";
    return new Promise((resolve, reject) => request(`https://api.telegram.org/bot${token}/${method}`, {
        agent,
        timeout,
        method: "POST",
        formData: prepareFormRequestOptions(content),
        json: true,
        gzip: true,
    }, async (error, response, body) => {
        if (body) {
            resolve(body);
        } else {
            reject(error || response);
        }
    }));
}
