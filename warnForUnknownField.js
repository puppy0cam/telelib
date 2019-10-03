const unknownFieldsMap = new WeakMap();
export const warnForUnknownFields = (target, key) => {
    "use strict";
    const fields = unknownFieldsMap.get(target) || unknownFieldsMap.set(target, new Set()).get(target);
    if (!fields.has(key)) {
        console.warn(`[${target.name || "<anonymous function>"}] - Detected an unknown field: ${typeof key === "symbol" ? `[Symbol${key.description ? `: ${key.description}` : ""}` : JSON.stringify(key)}`);
    }
};
