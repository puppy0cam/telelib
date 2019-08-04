export default function Boolean(value) {
    "use strict";
    if (typeof value === "boolean") {
        return value;
    } else {
        throw new TypeError();
    }
}
