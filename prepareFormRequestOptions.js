import { createAggregateListOfAllFiles, createReplacerForAllInstancesOfValueInObjectStructure, isFile, isPrimitive, JSONStringify, ObjectKeys } from "./_internals.js";
export const prepareFormRequestOptions = (data) => {
    "use strict";
    const aggregatedFiles = new Map();
    for (const file of createAggregateListOfAllFiles(data)) {
        aggregatedFiles.set(file, `file_${aggregatedFiles.size}`);
        for (const i in data) {
            if (data[i] === file) {
                aggregatedFiles.set(file, i);
            }
        }
    }
    let result = data;
    for (const [file, filename] of aggregatedFiles) {
        result = createReplacerForAllInstancesOfValueInObjectStructure(file, `attach://${filename}`, result);
        result[filename] = file;
    }
    for (const key of ObjectKeys(result)) {
        const value = result[key];
        if (value == null) {
            delete result[key];
        }
        else if (typeof value === "boolean" || !isPrimitive(value) && !isFile(value)) {
            result[key] = JSONStringify(value);
        }
    }
    return result;
};
