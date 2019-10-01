import { IShippingOption, ShippingOption, Bot } from "./_internals.js";

export const Array_of_ShippingOption = (value: IShippingOption[], token?: string | Bot) => {
    "use strict";
    const result: ShippingOption[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new ShippingOption(value[i], token);
    }
    return result;
}
