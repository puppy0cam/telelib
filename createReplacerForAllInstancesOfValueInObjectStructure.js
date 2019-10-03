import { replaceAllInstancesOfValueInObjectStructure } from "./_internals.js";
export const createReplacerForAllInstancesOfValueInObjectStructure = (replace, replaceWith, data) => {
    "use strict";
    return replaceAllInstancesOfValueInObjectStructure(new WeakMap(), replace, replaceWith, data);
};
