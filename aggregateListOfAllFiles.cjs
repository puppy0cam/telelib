"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
exports.aggregateListOfAllFiles = (files, cache, data) => {
    "use strict";
    if (cache.has(data)) {
        return files;
    }
    else if (_internals_js_1.isFile(data)) {
        files.add(data);
    }
    else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            exports.aggregateListOfAllFiles(files, cache, data[i]);
        }
    }
    else if (!_internals_js_1.isPrimitive(data)) {
        const DATA_KEYS = Object.keys(data);
        for (let i = 0; i < DATA_KEYS.length; i++) {
            const key = DATA_KEYS[i];
            exports.aggregateListOfAllFiles(files, cache, data[key]);
        }
    }
    else {
        return files;
    }
    cache.add(data);
    return files;
};
