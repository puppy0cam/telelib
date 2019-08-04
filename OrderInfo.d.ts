import String from "./String";
import ShippingAddress from "./ShippingAddress";

/** This object represents information about an order. */
export default class OrderInfo implements IOrderInfo {
    constructor(data: IOrderInfo | OrderInfo, token?: string);
    public name?: String;
    public phone_number?: String;
    public email?: String;
    public shipping_address?: ShippingAddress;
}

export interface IOrderInfo {
    /** User name */
    name?: String;
    /** User's phone number */
    phone_number?: String;
    /** User email */
    email?: String;
    /** User shipping address */
    shipping_address?: ShippingAddress;
}
