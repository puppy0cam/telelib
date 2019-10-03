"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenedResultWrapping = async (callback, data, token) => {
    "use strict";
    return callback(await data, token);
};
