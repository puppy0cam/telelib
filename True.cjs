"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.True = (value) => {
    "use strict";
    if (value === true) {
        return value;
    }
    else {
        throw new TypeError("value was not true");
    }
};
