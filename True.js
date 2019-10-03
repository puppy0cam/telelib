export const True = (value) => {
    "use strict";
    if (value === true) {
        return value;
    }
    else {
        throw new TypeError("value was not true");
    }
};
