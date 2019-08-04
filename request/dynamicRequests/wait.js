import wait_ms from "./wait/createPromiseCallbackForTimeout.js";
export default function wait(ms, resolveInto) {
    "use strict";
    return new Promise(wait_ms(ms, resolveInto));
}
