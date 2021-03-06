import { isPrimitive, IsArray, ObjectKeys } from "./_internals.js";
export const replaceAllInstancesOfValueInObjectStructure = (cache: WeakMap<object, any>, replace: any, replaceWith: any, data: any) => {
    "use strict";
    try {
        if (cache.has(data)) {
            throw new Error("Cannot have a circular reference");
        } else if (data === replace) {
            return replaceWith;
        } else if (IsArray(data)) {
            const value: any = [];
            cache.set(data, value);
            for (let i = 0; i < data.length; i++) {
                const instance = data[i];
                const val = replaceAllInstancesOfValueInObjectStructure(cache, replace, replaceWith, instance) as any;
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
            const result: any = {};
            cache.set(data, result);
            let count = 0;
            const DATA_KEYS = ObjectKeys(data);
            for (let i = 0; i < DATA_KEYS.length; i++) {
                const key = DATA_KEYS[i];
                const value = replaceAllInstancesOfValueInObjectStructure(cache, replace, replaceWith, data[key]) as any;
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
