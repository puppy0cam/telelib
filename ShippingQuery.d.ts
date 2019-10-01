import { Bot, User, IUser, ShippingAddress, IShippingAddress, IShippingOption } from "./_internals.js";
/** This object contains information about an incoming shipping query. */
export declare class ShippingQuery extends Bot implements IShippingQuery {
    constructor(data: IShippingQuery, token?: string | Bot);
    id: string;
    from: User;
    invoice_payload: string;
    shipping_address: ShippingAddress;
    /** If you sent an invoice requesting a shipping address and the parameter *is_flexible* was specified, the Bot API will send an [Update](https://core.telegram.org/bots/api#update) with a *shipping_query* field to the bot. Use this method to reply to shipping queries. On success, *True* is returned. */
    answerShippingQuery(options: {
        /** Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible) */
        ok: true;
        /** Required if *ok* is True. A JSON-serialized array of available shipping options. */
        shipping_options: IShippingOption[];
    }, timeout?: number): Promise<true>;
    /** If you sent an invoice requesting a shipping address and the parameter *is_flexible* was specified, the Bot API will send an [Update](https://core.telegram.org/bots/api#update) with a *shipping_query* field to the bot. Use this method to reply to shipping queries. On success, *True* is returned. */
    answerShippingQuery(options: {
        /** Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible) */
        ok: false;
        /** Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user. */
        error_message: string;
    }, timeout?: number): Promise<true>;
}
/** This object contains information about an incoming shipping query. */
export interface IShippingQuery {
    /** Unique query identifier */
    id: string;
    /** User who sent the query */
    from: IUser;
    /** Bot specified invoice payload */
    invoice_payload: string;
    /** User specified shipping address */
    shipping_address: IShippingAddress;
}
