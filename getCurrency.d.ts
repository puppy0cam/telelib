/**
 * Retrieves the data for a currency.
 * @param currency The currency code.
 */
export default function getCurrency(currency: string): CurrencyData;
export interface CurrencyData {
    code: string;
    title: string;
    symbol: string;
    native: string;
    thousands_sep: string;
    decimal_sep: string;
    symbol_left: boolean;
    space_between: boolean;
    exp: number;
    min_amount: string;
    /**
     * Not entirely sure why it is like this,
     * but USD is the only currency with this value as a number rather than a string.
     */
    max_amount: string | number;
}
