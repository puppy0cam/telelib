import String from "./String";
import Integer from "./Integer";

/** This object contains basic information about an invoice. */
export default class Invoice implements IInvoice {
    constructor(data: IInvoice | Invoice, token?: string);
    public title: String;
    public description: String;
    public start_parameter: String;
    public currency: String;
    public total_amount: Integer;
}

export interface IInvoice {
    /** Product name */
    title: String;
    /** Product description */
    description: String;
    /** Unique bot deep-linking parameter that can be used to generate this invoice */
    start_parameter: String;
    /** Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code */
    currency: String;
    /** Total price in the smallest units of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: Integer;
}
