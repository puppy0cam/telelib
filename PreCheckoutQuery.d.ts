import String from "./String";
import User from "./User";
import Integer from "./Integer";
import OrderInfo from "./OrderInfo";
import True from "./True";

/** This object contains information about an incoming pre-checkout query. */
export default class PreCheckoutQuery implements IPreCheckoutQuery {
    constructor(data: IPreCheckoutQuery | PreCheckoutQuery, token?: string);
    public id: String;
    public from: User;
    public currency: String;
    public total_amount: Integer;
    public invoice_payload: String;
    public shipping_option_id?: String;
    public order_info?: OrderInfo;
    /** Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an [Update](https://core.telegram.org/bots/api#update) with the field *pre_checkout_query*. Use this method to respond to such pre-checkout queries. On success, True is returned. **Note:** The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent. */
    public answerPreCheckoutQuery(options?: {
        /** Specify *True* if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems. */
        ok: false;
        /** Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user. */
        error_message: String;
    }): Promise<True>;
}

export interface IPreCheckoutQuery {
    /** Unique query identifier */
    id: String;
    /** User who sent the query */
    from: User;
    /** Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code */
    currency: String;
    /** Total price in the smallest units of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the *exp* parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: Integer;
    /** Bot specified invoice payload */
    invoice_payload: String;
    /** Identifier of the shipping option chosen by the user */
    shipping_option_id?: String;
    /** Order info provided by the user */
    order_info?: OrderInfo;
}
