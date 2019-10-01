import { createPromiseCallbackForTimeout as wait_ms } from "./_internals.js";

export const wait = <T = void>(ms: number, resolveInto?: T) => {
    "use strict";
    return new Promise(wait_ms(ms, resolveInto)) as Promise<T>;
}
