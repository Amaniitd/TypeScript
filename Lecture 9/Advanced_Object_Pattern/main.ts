import { Currency } from "./currency";

var usd_sgd: Currency;

usd_sgd = {
    from: "USD",
    to: "SGD",
    value: 1.35
}

var result = Currency.convert(100, usd_sgd);
console.log(result);