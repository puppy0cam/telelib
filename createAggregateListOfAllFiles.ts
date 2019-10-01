import { aggregateListOfAllFiles } from "./_internals.js";

export const createAggregateListOfAllFiles = (data: any) => {
    "use strict";
    return aggregateListOfAllFiles(new Set(), new WeakSet(), data);
}
