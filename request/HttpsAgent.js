import { readFileSync } from "fs";
import { Agent } from "https";
export const cert = readFileSync(new URL("./YOURPUBLIC.pem", import.meta.url));
export const key = readFileSync(new URL("./YOURPRIVATE.key", import.meta.url));
const HttpsAgent = new Agent({
    cert,
    key,
    keepAlive: true,
    keepAliveMsecs: 10000,
    maxFreeSockets: 25,
    maxSockets: 100,
    port: 443,
    host: "api.telegram.org",
    timeout: 300000,
});
export default HttpsAgent;
