export default Object.defineProperty(timestamp => {
    "use strict";
    if (timestamp == null || timestamp === 0) {
        return null;
    } else if (timestamp instanceof Date || typeof timestamp === "string") {
        return new Date(timestamp);
    } else if (typeof timestamp === "number" && isFinite(timestamp)) {
        if (timestamp < 0) {
            return new Date(validateDate(timestamp * -1).valueOf() * -1);
        } else {
            while (timestamp > 9999999999999) {
                timestamp /= 1000;
            }
            while (timestamp < 999999999999) {
                timestamp *= 1000;
            }
            return new Date(timestamp);
        }
    } else {
        throw new Error(timestamp);
    }
}, "name", {
    configurable: false,
    enumerable: false,
    value: "Date",
    writable: false,
});
