import getCurrency from "./getCurrency";

export default function ensureAmountIsPermittedForCurrency(amount, currency) {
    "use strict";
    const {
        max_amount,
        min_amount,
    } = getCurrency(currency);
    if (amount < min_amount) {
        throw new RangeError(`CURRENCY_AMOUNT_EXCEEDS_MAXIMUM - The currency '${currency}' requires that the amount be larger than ${min_amount}, however ${amount} was received.`);
    } else if (amount > max_amount) {
        throw new RangeError(`CURRENCY_AMOUNT_BELOW_MINIMUM - The currency '${currency}' requires that the amount be less than ${max_amount}, however ${amount} was received.`);
    }
}
