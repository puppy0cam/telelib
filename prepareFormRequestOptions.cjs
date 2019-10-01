"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
exports.prepareFormRequestOptions = (data) => {
    "use strict";
    const aggregatedFiles = new Map();
    for (const file of _internals_js_1.createAggregateListOfAllFiles(data)) {
        aggregatedFiles.set(file, `file_${aggregatedFiles.size}`);
        for (const i in data) {
            if (data[i] === file) {
                aggregatedFiles.set(file, i);
            }
        }
    }
    let result = data;
    for (const [file, filename] of aggregatedFiles) {
        result = _internals_js_1.createReplacerForAllInstancesOfValueInObjectStructure(file, `attach://${filename}`, result);
        result[filename] = file;
    }
    for (const key of _internals_js_1.ObjectKeys(result)) {
        const value = result[key];
        if (value == null) {
            delete result[key];
        }
        else if (typeof value === "boolean" || !_internals_js_1.isPrimitive(value) && !_internals_js_1.isFile(value)) {
            result[key] = _internals_js_1.JSONStringify(value);
        }
    }
    return result;
};
