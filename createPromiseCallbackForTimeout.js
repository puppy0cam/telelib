"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timers_1 = require("timers");
exports.createPromiseCallbackForTimeout = (ms, resolveInto) => {
    "use strict";
    return (resolve) => {
        "use strict";
        timers_1.setTimeout(resolve, ms, resolveInto);
    };
};
