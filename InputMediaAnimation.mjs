import { InputMedia } from "./_internals.mjs";
/** Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent. */
export class InputMediaAnimation extends InputMedia {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
