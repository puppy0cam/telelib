"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
exports.createReplacerForAllInstancesOfValueInObjectStructure = (replace, replaceWith, data) => {
    "use strict";
    return _internals_js_1.replaceAllInstancesOfValueInObjectStructure(new WeakMap(), replace, replaceWith, data);
};
