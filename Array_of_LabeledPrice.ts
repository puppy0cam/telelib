import { ILabeledPrice, LabeledPrice, Bot } from "./_internals.js";

export const Array_of_LabeledPrice = (value: ILabeledPrice[], token?: string | Bot) => {
    "use strict";
    const result: LabeledPrice[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new LabeledPrice(value[i], token);
    }
    return result;
}
