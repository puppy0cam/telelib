import { createPromiseCallbackForTimeout as wait_ms } from "./_internals.js";
export const wait = (ms, resolveInto) => {
    "use strict";
    return new Promise(wait_ms(ms, resolveInto));
};
