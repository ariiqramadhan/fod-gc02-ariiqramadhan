export const toCurrency = (num: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    });
    return formatter.format(num);
}