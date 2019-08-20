import { Buffer } from "buffer";
import Stream from "stream";
export default function isFile(value) {
    "use strict";
    return value instanceof Stream || Buffer.isBuffer(value);
}
