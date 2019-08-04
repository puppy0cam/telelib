import Stream from "stream";
import { Buffer } from "buffer";
export default function isFile(value) {
    "use strict";
    return value instanceof Stream || Buffer.isBuffer(value);
}
