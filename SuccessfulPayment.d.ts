import String from "./String";
import Integer from "./Integer";
import OrderInfo from "./OrderInfo";
import { CurrencyData } from "./getCurrency";

/** This object contains basic information about a successful payment. */
export default class SuccessfulPayment implements ISuccessfulPayment {
    constructor(data: ISuccessfulPayment | SuccessfulPayment, token?: string);
    public currency: String;
    public total_amount: Integer;
    public invoice_payload: String;
    public shipping_option_id?: String;
    public order_info?: OrderInfo;
    public telegram_payment_charge_id: String;
    public provider_payment_charge_id: String;
    /**
     * Will get basic information about the currency used.
     */
    public getCurrency(): CurrencyData;
    /**
     * Will create text of the total_amount formatted for the currency used
     */
    public formatCurrency(): string;
}

export interface ISuccessfulPayment {
    /** Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code */
    currency: String;
    /** Total price in the *smallest* units of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: Integer;
    /** Bot specified invoice payload */
    invoice_payload: String;
    /** Identifier of the shipping option chosen by the user */
    shipping_option_id?: String;
    /** Order info provided by the user */
    order_info?: OrderInfo;
    /** Telegram payment identifier */
    telegram_payment_charge_id: String;
    /** Provider payment identifier */
    provider_payment_charge_id: String;
}
