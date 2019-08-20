import createAggregateListOfAllFiles from "./createAggregateListOfAllFiles.js";
import createReplacerForAllInstancesOfValueInObjectStructure from "./createReplacerForAllInstancesOfValueInObjectStructure.js";
import isFile from "./isFile.js";
import isPrimitive from "./isPrimitive.js";

export default function prepareFormRequestOptions(data) {
    const aggregatedFiles = new Map();
    for (const file of createAggregateListOfAllFiles()(data)) {
        aggregatedFiles.set(file, `file_${aggregatedFiles.size}`);
        for (const i in data) {
            if (data[i] === file) {
                aggregatedFiles.set(file, i);
            }
        }
    }
    let result = data;
    for (const [file, filename] of aggregatedFiles) {
        result = createReplacerForAllInstancesOfValueInObjectStructure(file, `attach://${filename}`)(result);
        result[filename] = file;
    }
    for (const key of Object.keys(result)) {
        const value = result[key];
        if (value == null) {
            delete result[key];
        } else if (typeof value === "boolean" || !isPrimitive(value) && !isFile(value)) {
            result[key] = JSON.stringify(value);
        }
    }
    return result;
}
