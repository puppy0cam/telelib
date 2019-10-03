import { Stream } from "stream";
import { IsBuffer } from "./_internals.js";
export const isFile = (value) => {
    "use strict";
    return value instanceof Stream || IsBuffer(value);
};
