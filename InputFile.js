import { Buffer } from "buffer";
import Stream from "stream";
export default function InputFile(value) {
    "use strict";
    if (value instanceof Stream || Buffer.isBuffer(value)) {
        return value;
    } else {
        throw new TypeError("Not an InputFile");
    }
}
