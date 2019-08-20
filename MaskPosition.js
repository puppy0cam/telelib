import Bot from "./Bot.js";
import Float_number from "./Float number.js";
import String from "./String.js";

export default class MaskPosition extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            point,
            x_shift,
            y_shift,
            scale,
        } = _value;
        this.point = String(point);
        this.x_shift = Float_number(x_shift);
        this.y_shift = Float_number(y_shift);
        this.scale = Float_number(scale);
    }
}
