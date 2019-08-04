import String from "./String.js";

export default Object.assign(value => {
    "use strict";
    return value.map(String);
}, "name", {
    configurable: false,
    enumerable: false,
    value: "Array_of_String",
    writable: false,
});
