import String from "./String";

/** This object represents a shipping address. */
export default class ShippingAddress implements IShippingAddress {
    constructor(data: IShippingAddress | ShippingAddress, token?: string);
    public country_code: String;
    public state: String;
    public city: String;
    public street_line1: String;
    public street_line2: String;
    public post_code: String;
}

export interface IShippingAddress {
    /** ISO 3166-1 alpha-2 country code */
    country_code: String;
    /** State, if applicable */
    state: String;
    /** City */
    city: String;
    /** First line for the address */
    street_line1: String;
    /** Second line for the address */
    street_line2: String;
    /** Address post code */
    post_code: String;
}
