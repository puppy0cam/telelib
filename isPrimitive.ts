export const isPrimitive = (value: any) => {
    "use strict";
    switch (typeof value) {
        case "object":
            return value === null;
        case "function":
            return false;
        default:
            return true;
    }
}
