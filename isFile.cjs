"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = __importDefault(require("stream"));
const _internals_js_1 = require("./_internals.cjs");
exports.isFile = (value) => {
    "use strict";
    return value instanceof stream_1.default || _internals_js_1.IsBuffer(value);
};
