"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenlessResultWrapping = async (callback, data) => {
    "use strict";
    return callback(await data);
};
