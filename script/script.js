{
    const rateValue = document.querySelector(".js-rate");
    const fromValue = document.querySelector(".js-fromValue");
    const toValue = document.querySelector(".js-toValue");
    const fromCurrency = document.querySelector(".js-fromCurrency");
    const toCurrency = document.querySelector(".js-toCurrency");
    const plnRate = 1;
    const eurRate = 4.54;
    const usdRate = 4.00;

    fromCurrency.value = "EUR";
    toCurrency.value = "PLN";
    rateValue.value = eurRate;

    let firstCurrency = fromCurrency.value;
    let secondCurrency = toCurrency.value;

    const init = () => {
        const form = document.querySelector(".js-form");

        [fromCurrency, toCurrency].forEach((element) => {
            element.addEventListener("change", onCurrencyChange);
        });

        fromValue.addEventListener("input", () => {
            toValue.value = "";
        });

        toValue.addEventListener("input", () => {
            fromValue.value = "";
        });

        form.addEventListener("submit", onFormSubmit);
    };

    const onCurrencyChange = () => {

        sameCurrencyHandler();

        defaultRate = calcDefaultRate();

        rateValue.value = calcDefinitiveRate(defaultRate);
    };

    const sameCurrencyHandler = () => {
        if (fromCurrency.value === toCurrency.value && toCurrency.value === secondCurrency) {
            toCurrency.value = firstCurrency;
        }
        else if (fromCurrency.value === toCurrency.value && toCurrency.value === firstCurrency) {
            fromCurrency.value = secondCurrency;
        };

        firstCurrency = fromCurrency.value;
        secondCurrency = toCurrency.value;
    };

    const calcDefaultRate = () => {
        switch (fromCurrency.value) {
            case "EUR":
                return eurRate;
            case "USD":
                return usdRate;
            default:
                return plnRate;
        };
    };

    const calcDefinitiveRate = (rate) => {
        switch (toCurrency.value) {
            case "EUR":
                return (rate * (1 / eurRate)).toFixed(2);
            case "USD":
                return (rate * (1 / usdRate)).toFixed(2);
            default:
                return (rate * (1 / plnRate)).toFixed(2);
        };
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (fromValue.value === "") {
            fromValue.value = (toValue.value / rateValue.value).toFixed(2);
        } else {
            toValue.value = (fromValue.value * rateValue.value).toFixed(2);
        };
    };

    init();


}