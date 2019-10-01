import { Bot, ShippingAddress, IShippingAddress } from "./_internals.js";

/** This object represents information about an order. */
export class OrderInfo extends Bot implements IOrderInfo {
    constructor(data: IOrderInfo, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.shipping_address) {
            this.shipping_address = new ShippingAddress(this.shipping_address, this);
        }
    }
    public name?: string;
    public phone_number?: string;
    public email?: string;
    public shipping_address?: ShippingAddress;
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
