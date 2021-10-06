export const currencyFormat = (
    amount: number,
    localeString: string = "en-gb",
    currency: string = "GBP"
) => {
    const formattedCurrency = amount.toLocaleString(localeString, {
        style: "currency",
        currency
    });
    return formattedCurrency;
};
