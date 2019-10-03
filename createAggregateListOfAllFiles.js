"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
exports.createAggregateListOfAllFiles = (data) => {
    "use strict";
    return _internals_js_1.aggregateListOfAllFiles(new Set(), new WeakSet(), data);
};
