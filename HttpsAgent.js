"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = require("https");
exports.HttpsAgent = new https_1.Agent({
    host: "api.telegram.org",
    keepAlive: true,
    keepAliveMsecs: 10000,
    maxFreeSockets: 25,
    maxSockets: 100,
    port: 443,
    timeout: 300000,
});
