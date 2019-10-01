import Stream from "stream";
import { IsBuffer } from "./_internals.mjs";
export const isFile = (value) => {
    "use strict";
    return value instanceof Stream || IsBuffer(value);
};
