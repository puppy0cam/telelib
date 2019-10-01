import { setTimeout } from "timers";
export const createPromiseCallbackForTimeout = (ms, resolveInto) => {
    "use strict";
    return (resolve) => {
        "use strict";
        setTimeout(resolve, ms, resolveInto);
    };
};
