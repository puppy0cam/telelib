const unknownFieldsMap: WeakMap<new (...args: any[]) => any, Set<string | number | symbol>> = new WeakMap();
export const warnForUnknownFields = (target: (new (...args: any[]) => any), key: string | number | symbol) => {
    "use strict";
    const fields: Set<string | number | symbol> = unknownFieldsMap.get(target) || unknownFieldsMap.set(target, new Set()).get(target) as any;
    if (!fields.has(key)) {
        console.warn(`[${target.name || "<anonymous function>"}] - Detected an unknown field: ${typeof key === "symbol" ? `[Symbol${key.description ? `: ${key.description}` : ""}` : JSON.stringify(key)}`)
    }
}
