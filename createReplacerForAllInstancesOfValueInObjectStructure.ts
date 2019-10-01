import { replaceAllInstancesOfValueInObjectStructure } from "./_internals.js";

export const createReplacerForAllInstancesOfValueInObjectStructure = (replace: any, replaceWith: any, data: any) => {
    "use strict";
    return replaceAllInstancesOfValueInObjectStructure(new WeakMap(), replace, replaceWith, data);
}
