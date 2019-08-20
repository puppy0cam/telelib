import ensureAmountIsPermittedForCurrency from "./ensureAmountIsPermittedForCurrency.js";
import getCurrency from "./getCurrency.js";

export default function formatAmountToCurrency(amount, currency) {
    "use strict";
    ensureAmountIsPermittedForCurrency(amount, currency);
    return formatCurrency(getCurrency(currency), Number(amount));
}
function prefixCurrencySymbol(currencyData) {
    "use strict";
    return currencyData.symbol_left ? currencyData.symbol + currencySpaceBetween(currencyData) : "";
}
function currencySpaceBetween(currencyData) {
    "use strict";
    return currencyData.space_between ? " " : "";
}
function suffixCurrencySymbol(currencyData) {
    "use strict";
    return currencyData.symbol_left ? "" : currencySpaceBetween(currencyData) + currencyData.symbol;
}
function getDecimalValues(currencyData, value) {
    "use strict";
    const EXPONENT = Math.pow(10, currencyData.exp);
    const LOWER_BOUND = value % EXPONENT;
    const UPPER_BOUND = (value - LOWER_BOUND) / EXPONENT;
    return [UPPER_BOUND, LOWER_BOUND];
}
function formatUpperBound(currencyData, UPPER_BOUND) {
    "use strict";
    const placements = [];
    let CURRENT_PLACEMENT = "";
    for (const entry of UPPER_BOUND.toString().split(/(?<=\d)/).reverse()) {
        CURRENT_PLACEMENT += entry;
        if (CURRENT_PLACEMENT.length >= 3) {
            placements.push(CURRENT_PLACEMENT);
            CURRENT_PLACEMENT = "";
        }
    }
    if (CURRENT_PLACEMENT) {
        placements.push(CURRENT_PLACEMENT);
    }
    return placements.reverse().map(reverseText).join(currencyData.thousands_sep);
}
function reverseText(text) {
    "use strict";
    return text.split("").reverse().join("");
}
function formatLowerBound(currencyData, LOWER_BOUND) {
    "use strict";
    if (LOWER_BOUND) {
        return currencyData.decimal_sep + LOWER_BOUND;
    } else {
        return "";
    }
}
function formatCurrency(currencyData, value) {
    "use strict";
    const [UPPER_BOUND, LOWER_BOUND] = getDecimalValues(currencyData, value);
    return prefixCurrencySymbol(currencyData) + formatUpperBound(currencyData, UPPER_BOUND) + formatLowerBound(currencyData, LOWER_BOUND) + suffixCurrencySymbol(currencyData);
}
