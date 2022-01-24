let rateValue = document.querySelector(".js-rate");
let fromValue = document.querySelector(".js-fromValue");
let fromCurrency = document.querySelector(".js-fromCurrency");
let toValue = document.querySelector(".js-toValue");
let toCurrency = document.querySelector(".js-toCurrency");
let buttonElement = document.querySelector(".js-button");
let form = document.querySelector(".js-form");
let plnRate = 1;
let eurRate = 4.54;
let usdRate = 4.00;

fromCurrency.value = "EUR";
toCurrency.value = "PLN";

let firstCurrency = fromCurrency.value;
let secondCurrency = toCurrency.value;

rateValue.value = eurRate;

[fromCurrency, toCurrency].forEach((element) => {
    element.addEventListener("change", () => {

        if (fromCurrency.value === toCurrency.value && toCurrency.value === secondCurrency) {
            toCurrency.value = firstCurrency;
        }
        else if (fromCurrency.value === toCurrency.value && toCurrency.value === firstCurrency) {
            fromCurrency.value = secondCurrency;
        }

        switch (fromCurrency.value) {
            case "EUR":
                rateValue.value = eurRate;
                break;
            case "USD":
                rateValue.value = usdRate;
                break;
            default:
                rateValue.value = plnRate;
        }

        switch (toCurrency.value) {
            case "EUR":
                rateValue.value = (rateValue.value * (1 / eurRate)).toFixed(2);
                break;
            case "USD":
                rateValue.value = (rateValue.value * (1 / usdRate)).toFixed(2);
                break;
            default:
                rateValue.value = (rateValue.value * (1 / plnRate)).toFixed(2);
        }
        firstCurrency = fromCurrency.value;
        secondCurrency = toCurrency.value;
    });
});

fromValue.addEventListener("input", () => {
    toValue.value = "";
});

toValue.addEventListener("input", () => {
    fromValue.value = "";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (fromValue.value === "") {
        fromValue.value = (toValue.value / rateValue.value).toFixed(2);
    } else {
        toValue.value = (fromValue.value * rateValue.value).toFixed(2);
    }
});
