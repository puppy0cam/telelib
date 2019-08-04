import Integer from "./Integer.js";
import String from "./String.js";

export default function IntegerOrString(value) {
    "use strict";
    switch (typeof value) {
        case "number":
        case "bigint":
            return Integer(value);
        case "string":
            return String(value);
        default:
            throw new TypeError("Not a number or string");
    }
}
