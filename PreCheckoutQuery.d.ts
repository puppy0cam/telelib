import { Bot, User, IUser, OrderInfo, IOrderInfo } from "./_internals.js";
/** This object contains information about an incoming pre-checkout query. */
export declare class PreCheckoutQuery extends Bot implements IPreCheckoutQuery {
    constructor(data: IPreCheckoutQuery, token?: string | Bot);
    id: string;
    from: User;
    currency: string;
    total_amount: number;
    invoice_payload: string;
    shipping_option_id?: string;
    order_info?: OrderInfo;
    answerPreCheckoutQuery(options: {
        /** Specify *True* if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems. */
        ok: boolean;
        /** Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user. */
        error_message?: string;
    }, timeout?: number): Promise<true>;
}
/** This object contains information about an incoming pre-checkout query. */
export interface IPreCheckoutQuery {
    /** Unique query identifier */
    id: string;
    /** User who sent the query */
    from: IUser;
    /** Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code */
    currency: string;
    /** Total price in the smallest units of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the *exp* parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: number;
    /** Bot specified invoice payload */
    invoice_payload: string;
    /** Identifier of the shipping option chosen by the user */
    shipping_option_id?: string;
    /** Order info provided by the user */
    order_info?: IOrderInfo;
}
