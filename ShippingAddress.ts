import { Bot } from "./_internals.js";

/** This object represents a shipping address. */
export class ShippingAddress extends Bot implements IShippingAddress {
    constructor(data: IShippingAddress, token?: string | Bot) {
        "use strict";
        super(data, token);
    }
    public country_code!: string;
    public state!: string;
    public city!: string;
    public street_line1!: string;
    public street_line2!: string;
    public post_code!: string;
}

/** This object represents a shipping address. */
export interface IShippingAddress {
    /** ISO 3166-1 alpha-2 country code */
    country_code: string;
    /** State, if applicable */
    state: string;
    /** City */
    city: string;
    /** First line for the address */
    street_line1: string;
    /** Second line for the address */
    street_line2: string;
    /** Address post code */
    post_code: string;
}
