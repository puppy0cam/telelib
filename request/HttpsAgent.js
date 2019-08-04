import { Agent } from "https";
const HttpsAgent = new Agent({
    keepAlive: true,
    keepAliveMsecs: 10000,
    maxFreeSockets: 25,
    maxSockets: 100,
    port: 443,
    host: "api.telegram.org",
    timeout: 300000,
});
export default HttpsAgent;
