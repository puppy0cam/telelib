"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenedClassWrapping = async (callback, data, token) => {
    "use strict";
    return new callback(await data, token);
};
