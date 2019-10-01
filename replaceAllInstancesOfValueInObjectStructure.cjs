"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
exports.replaceAllInstancesOfValueInObjectStructure = (cache, replace, replaceWith, data) => {
    "use strict";
    try {
        if (cache.has(data)) {
            throw new Error("Cannot have a circular reference");
        }
        else if (data === replace) {
            return replaceWith;
        }
        else if (_internals_js_1.IsArray(data)) {
            const value = [];
            cache.set(data, value);
            for (let i = 0; i < data.length; i++) {
                const instance = data[i];
                const val = exports.replaceAllInstancesOfValueInObjectStructure(cache, replace, replaceWith, instance);
                if (val != null) {
                    value.push(val);
                }
            }
            if (value.length === 0) {
                return null;
            }
            else {
                return value;
            }
        }
        else if (!_internals_js_1.isPrimitive(data)) {
            const result = {};
            cache.set(data, result);
            let count = 0;
            const DATA_KEYS = _internals_js_1.ObjectKeys(data);
            for (let i = 0; i < DATA_KEYS.length; i++) {
                const key = DATA_KEYS[i];
                const value = exports.replaceAllInstancesOfValueInObjectStructure(cache, replace, replaceWith, data[key]);
                if (value != null) {
                    result[key] = value;
                    count++;
                }
            }
            if (count === 0) {
                return null;
            }
            else {
                return result;
            }
        }
        else if (data == null) {
            return null;
        }
        else {
            return data;
        }
    }
    finally {
        cache.delete(data);
    }
};
