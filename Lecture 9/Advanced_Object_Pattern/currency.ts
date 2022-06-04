
// Companion Object Pattern

// -> Functionality in type

type AcceptableCurrencies = "INR" | "USD" | "EUR" | "SGD";

export type Currency = {
    from: AcceptableCurrencies,
    to: AcceptableCurrencies,
    value: number
}

export var Currency = {   // an object with name Currency
    convert: function(qty: number, conversion: Currency): Currency {
        var margin = 0.02;
        return {
            from: conversion.from,
            to: conversion.to,
            value: conversion.value * qty * (1 - margin)
        }
    }
}


// type newName = existingType;
