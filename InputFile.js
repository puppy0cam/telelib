import Stream from "stream";
import { Buffer } from "buffer";
export default function InputFile(value) {
    "use strict";
    if (value instanceof Stream || Buffer.isBuffer(value)) {
        return value;
    } else {
        throw new TypeError("Not an InputFile");
    }
}
