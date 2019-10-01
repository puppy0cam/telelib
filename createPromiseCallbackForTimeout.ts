import { setTimeout } from "timers";

export const createPromiseCallbackForTimeout = <T>(ms: number, resolveInto: T) => {
    "use strict";
    return (resolve: (value: T) => void) => {
        "use strict";
        setTimeout(resolve, ms, resolveInto);
    }
}
