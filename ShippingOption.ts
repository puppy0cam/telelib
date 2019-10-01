import { Bot, Array_of_LabeledPrice, LabeledPrice, ILabeledPrice } from "./_internals.js";

/** This object represents one shipping option. */
export class ShippingOption extends Bot implements IShippingOption {
    constructor(data: IShippingOption, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.prices) {
            this.prices = Array_of_LabeledPrice(this.prices, this);
        }
    }
    public id!: string;
    public title!: string;
    public prices!: LabeledPrice[];
}

/** This object represents one shipping option. */
export interface IShippingOption {
    /** Shipping option identifier */
    id: string;
    /** Option title */
    title: string;
    /** List of price portions */
    prices: ILabeledPrice[];
}
