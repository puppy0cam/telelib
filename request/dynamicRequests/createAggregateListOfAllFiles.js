import isFile from "./isFile.js";
import isPrimitive from "./isPrimitive.js";

export default function createAggregateListOfAllFiles() {
    "use strict";
    const files = new Set();
    const cache = new WeakSet();
    return function aggregateListOfAllFiles(data) {
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
}
