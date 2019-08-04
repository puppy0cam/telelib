import String from "./String";
import Integer from "./Integer";

/** This object represents a portion of the price for goods or services. */
export default class LabeledPrice implements ILabeledPrice {
    constructor(data: ILabeledPrice | LabeledPrice, token?: string);
    public label: String;
    public amount: Integer;
}

export interface ILabeledPrice {
    /** Portion label */
    label: String;
    /** Price of the product in the *smallest* units of the [currency](https://core.telegram.org/bots/payments#supported-currencies) (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    amount: Integer;
}
