"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const _internals_js_1 = require("./_internals.js");
exports.sendFormDataRequest = (token, method, content, timeout) => {
    "use strict";
    return new Promise((resolve, reject) => request_1.default(`https://api.telegram.org/bot${token}/${method}`, {
        agent: _internals_js_1.HttpsAgent,
        timeout,
        formData: _internals_js_1.prepareFormRequestOptions(content),
        gzip: true,
        json: true,
        method: "POST",
    }, (error, response, body) => {
        if (body) {
            resolve(body);
        }
        else {
            reject(error || (response && response.body) || response);
        }
    }));
};
