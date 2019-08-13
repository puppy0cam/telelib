import Currencies from "./currencies.json";

export default function getCurrency(currency) {
    "use strict";
    const currencyData = Currencies[currency];
    if (currencyData) {
        return currencyData;
    } else {
        throw new Error("Currency could not be recognised");
    }
}
