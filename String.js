export default (value) => {
    "use strict";
    if (typeof value === "string") {
        return value;
    } else if (value instanceof String) {
        return value.valueOf();
    } else {
        throw new TypeError("This value is not a string!");
    }
};
