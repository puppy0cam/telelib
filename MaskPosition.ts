import { Bot } from "./_internals.js";

/** This object describes the position on faces where a mask should be placed by default. */
export class MaskPosition extends Bot implements IMaskPosition {
    constructor(data: IMaskPosition, token?: string | Bot) {
        "use strict";
        super(data, token);
    }
    public point!: string;
    public x_shift!: number;
    public y_shift!: number;
    public scale!: number;
}

/** This object describes the position on faces where a mask should be placed by default. */
export interface IMaskPosition {
    /** The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”. */
    point: string;
    /** Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. */
    x_shift: number;
    /** Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position. */
    y_shift: number;
    /** Mask scaling coefficient. For example, 2.0 means double size. */
    scale: number;
}
