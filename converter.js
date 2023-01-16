let rates = {
     usd: 0.015,
     eur: 0.013,
}

function convert({rub, currency}) {
    if (!rates[currency]) {
        return null;
    }
    return rub * rates[currency];
}