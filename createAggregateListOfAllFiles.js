import { aggregateListOfAllFiles } from "./_internals.js";
export const createAggregateListOfAllFiles = (data) => {
    "use strict";
    return aggregateListOfAllFiles(new Set(), new WeakSet(), data);
};
