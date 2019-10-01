import { Bot, ShippingAddress, IShippingAddress } from "./_internals.js";
/** This object represents information about an order. */
export declare class OrderInfo extends Bot implements IOrderInfo {
    constructor(data: IOrderInfo, token?: string | Bot);
    name?: string;
    phone_number?: string;
    email?: string;
    shipping_address?: ShippingAddress;
}
/** This object represents information about an order. */
export interface IOrderInfo {
    /** User name */
    name?: string;
    /** User's phone number */
    phone_number?: string;
    /** User email */
    email?: string;
    /** User shipping address */
    shipping_address?: IShippingAddress;
}
