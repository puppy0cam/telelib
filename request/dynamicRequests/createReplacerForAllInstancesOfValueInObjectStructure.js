import isPrimitive from "./isPrimitive.js";

export default function createReplacerForAllInstancesOfValueInObjectStructure(replace, replaceWith, data) {
    "use strict";
    return replaceAllInstancesOfValueInObjectStructure(new WeakMap(), replace, replaceWith, data);
}
export function replaceAllInstancesOfValueInObjectStructure(cache, replace, replaceWith, data) {
    "use strict";
    try {
        if (cache.has(data)) {
            throw new Error("Cannot have a circular reference");
        } else if (data === replace) {
            return replaceWith;
        } else if (Array.isArray(data)) {
            const value = [];
            cache.set(data, value);
            for (let i = 0; i < data.length; i++) {
                const instance = data[i];
                const val = replaceAllInstancesOfValueInObjectStructure(cache, replace, replaceWith, instance);
                if (val != null) {
                    value.push(val);
                }
            }
            if (value.length === 0) {
                return null;
            } else {
                return value;
            }
        } else if (!isPrimitive(data)) {
            const result = {};
            cache.set(data, result);
            let count = 0;
            for (const key in data) {
                const value = replaceAllInstancesOfValueInObjectStructure(cache, replace, replaceWith, data[key]);
                if (value != null) {
                    result[key] = value;
                    count++;
                }
            }
            if (count === 0) {
                return null;
            } else {
                return result;
            }
        } else if (data == null) {
            return null;
        } else {
            return data;
        }
    } finally {
        cache.delete(data);
    }
}
