import { Bot, OrderInfo, IOrderInfo } from "./_internals.js";
/** This object contains basic information about a successful payment. */
export declare class SuccessfulPayment extends Bot implements ISuccessfulPayment {
    constructor(data: ISuccessfulPayment, token?: string | Bot);
    currency: string;
    total_amount: number;
    invoice_payload: string;
    shipping_option_id?: string;
    order_info?: OrderInfo;
    telegram_payment_charge_id: string;
    provider_payment_charge_id: string;
}
/** This object contains basic information about a successful payment. */
export interface ISuccessfulPayment {
    /** Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code */
    currency: string;
    /** Total price in the *smallest* units of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: number;
    /** Bot specified invoice payload */
    invoice_payload: string;
    /** Identifier of the shipping option chosen by the user */
    shipping_option_id?: string;
    /** Order info provided by the user */
    order_info?: IOrderInfo;
    /** Telegram payment identifier */
    telegram_payment_charge_id: string;
    /** Provider payment identifier */
    provider_payment_charge_id: string;
}
