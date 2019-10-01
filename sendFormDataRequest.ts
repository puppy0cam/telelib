import request from "request";
import { HttpsAgent as agent, prepareFormRequestOptions } from "./_internals.js";

export const sendFormDataRequest = (token: string, method: string, content: object, timeout: number) => {
    "use strict";
    return new Promise<any>((resolve, reject) => request(`https://api.telegram.org/bot${token}/${method}`, {
        agent,
        timeout,
        formData: prepareFormRequestOptions(content),
        gzip: true,
        json: true,
        method: "POST",
    }, (error, response, body) => {
        if (body) {
            resolve(body);
        } else {
            reject(error || (response && response.body) || response);
        }
    }));
}
