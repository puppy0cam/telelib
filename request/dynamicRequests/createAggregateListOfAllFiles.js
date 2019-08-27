import isFile from "./isFile.js";
import isPrimitive from "./isPrimitive.js";

export default function createAggregateListOfAllFiles(data) {
    "use strict";
    return aggregateListOfAllFiles(new Set(), new WeakSet(), data)
}
export function aggregateListOfAllFiles(files, cache, data) {
    "use strict";
    if (cache.has(data)) {
        return files;
    } else if (isFile(data)) {
        files.add(data);
    } else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            aggregateListOfAllFiles(files, cache, data[i]);
        }
    } else if (!isPrimitive(data)) {
        for (const key in data) {
            aggregateListOfAllFiles(data[key]);
        }
    } else {
        return files;
    }
    cache.add(data);
    return files;
}
