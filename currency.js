const currencyFrom = document.getElementById('currency-from');
const amountFrom = document.getElementById('amount-from');
const currencyTo = document.getElementById('currency-to');
const amountTo = document.getElementById('amount-to');
const currencyBtn = document.getElementById('currency-btn');
const showResult = document.querySelector('.show__result');

/**
 *
 * detecting exact rate of the currency
 * @param {*} currency
 * @returns
 */
const findRate = (currency) => {
    let rate;

    if (currency === 'pound') {
        rate = 115.71;
    } else if (currency === 'CAD') {
        rate = 67.31;
    } else if (currency === 'USD') {
        rate = 85.83;
    } else if (currency === 'EURO') {
        rate = 97.04;
    } else {
        rate = null;
    }
    return rate;
};

/**
 * calculate the final amount
 */
const calAmount = () => {
    const rate = findRate(currencyFrom.value);
    const amount = +amountFrom.value.trim();

    const convertAmount = (amount * rate).toFixed(2);
    amountTo.value = convertAmount;
    if (rate) {
        showResult.innerText = `1 ${currencyFrom.value} = ${rate} ${currencyTo.value}`;
    } else {
        showResult.innerText = 'Please, Select Valid Currency';
    }
};
currencyFrom.addEventListener('change', calAmount);
amountFrom.addEventListener('input', calAmount);
amountTo.addEventListener('input', calAmount);
currencyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    calAmount();
});
