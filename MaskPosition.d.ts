import String from "./String";
import Float_number from "./Float number";

/** This object describes the position on faces where a mask should be placed by default. */
export default class MaskPosition implements IMaskPosition {
    constructor(data: IMaskPosition | MaskPosition, token?: string);
    public point: String;
    public x_shift: Float_number;
    public y_shift: Float_number;
    public scale: Float_number;
}

export interface IMaskPosition {
    /** The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”. */
    point: String;
    /** Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. */
    x_shift: Float_number;
    /** Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position. */
    y_shift: Float_number;
    /** Mask scaling coefficient. For example, 2.0 means double size. */
    scale: Float_number;
}
