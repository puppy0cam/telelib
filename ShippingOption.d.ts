import String from "./String";
import Array_of_LabeledPrice from "./Array of LabeledPrice";

/** This object represents one shipping option. */
export default class ShippingOption implements IShippingOption {
    constructor(data: IShippingOption | ShippingOption, token?: string);
    public id: String;
    public title: String;
    public prices: Array_of_LabeledPrice;
}

export interface IShippingOption {
    /** Shipping option identifier */
    id: String;
    /** Option title */
    title: String;
    /** List of price portions */
    prices: Array_of_LabeledPrice;
}
