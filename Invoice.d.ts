import { Bot } from "./_internals.js";
/** This object contains basic information about an invoice. */
export declare class Invoice extends Bot implements IInvoice {
    constructor(data: IInvoice, token?: string | Bot);
    title: string;
    description: string;
    start_parameter: string;
    currency: string;
    total_amount: number;
}
/** This object contains basic information about an invoice. */
export interface IInvoice {
    /** Product name */
    title: string;
    /** Product description */
    description: string;
    /** Unique bot deep-linking parameter that can be used to generate this invoice */
    start_parameter: string;
    /** Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code */
    currency: string;
    /** Total price in the smallest units of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: number;
}
