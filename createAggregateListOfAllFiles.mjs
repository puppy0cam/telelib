import { aggregateListOfAllFiles } from "./_internals.mjs";
export const createAggregateListOfAllFiles = (data) => {
    "use strict";
    return aggregateListOfAllFiles(new Set(), new WeakSet(), data);
};
