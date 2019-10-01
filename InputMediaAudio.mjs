import { InputMedia } from "./_internals.mjs";
/** Represents an audio file to be treated as music to be sent. */
export class InputMediaAudio extends InputMedia {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
