import String from "./String";
import User from "./User";
import ShippingAddress from "./ShippingAddress";
import Array_of_ShippingOption from "./Array of ShippingOption";
import True from "./True";

/** This object contains information about an incoming shipping query. */
export default class ShippingQuery implements IShippingQuery {
    constructor(data: IShippingQuery | ShippingQuery, token?: string);
    public id: String;
    public from: User;
    public invoice_payload: String;
    public shipping_address: ShippingAddress;
    /** If you sent an invoice requesting a shipping address and the parameter *is_flexible* was specified, the Bot API will send an [Update](https://core.telegram.org/bots/api#update) with a *shipping_query* field to the bot. Use this method to reply to shipping queries. On success, *True* is returned. */
    public answerShippingQuery(options: {
        /** Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible) */
        ok: true;
        /** Required if *ok* is True. A JSON-serialized array of available shipping options. */
        shipping_options: Array_of_ShippingOption;
    }): Promise<True>;
    /** If you sent an invoice requesting a shipping address and the parameter *is_flexible* was specified, the Bot API will send an [Update](https://core.telegram.org/bots/api#update) with a *shipping_query* field to the bot. Use this method to reply to shipping queries. On success, *True* is returned. */
    public answerShippingQuery(options: {
        /** Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible) */
        ok: false;
        /** Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user. */
        error_message: String;
    }): Promise<True>;
}

export interface IShippingQuery {
    /** Unique query identifier */
    id: String;
    /** User who sent the query */
    from: User;
    /** Bot specified invoice payload */
    invoice_payload: String;
    /** User specified shipping address */
    shipping_address: ShippingAddress;
}
