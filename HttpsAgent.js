import { Agent } from "https";
export const HttpsAgent = new Agent({
    host: "api.telegram.org",
    keepAlive: true,
    keepAliveMsecs: 10000,
    maxFreeSockets: 25,
    maxSockets: 100,
    port: 443,
    timeout: 300000,
});
