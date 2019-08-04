import InputFile from "./InputFile.js";
import String from "./String.js";

export default function InputFileOrString(value) {
    "use strict";
    switch (typeof value) {
        case "string":
            return String(value);
        default:
            return InputFile(value);
    }
}
