import { isFile, isPrimitive } from "./_internals.mjs";
export const aggregateListOfAllFiles = (files, cache, data) => {
    "use strict";
    if (cache.has(data)) {
        return files;
    }
    else if (data == null) {
        return null;
    }
    else if (isFile(data)) {
        files.add(data);
    }
    else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            aggregateListOfAllFiles(files, cache, data[i]);
        }
    }
    else if (!isPrimitive(data)) {
        const DATA_KEYS = Object.keys(data);
        for (let i = 0; i < DATA_KEYS.length; i++) {
            const key = DATA_KEYS[i];
            aggregateListOfAllFiles(files, cache, data[key]);
        }
    }
    else {
        return files;
    }
    cache.add(data);
    return files;
};
