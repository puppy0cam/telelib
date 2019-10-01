import { Bot, LabeledPrice, ILabeledPrice } from "./_internals.js";
/** This object represents one shipping option. */
export declare class ShippingOption extends Bot implements IShippingOption {
    constructor(data: IShippingOption, token?: string | Bot);
    id: string;
    title: string;
    prices: LabeledPrice[];
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
