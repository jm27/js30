// Format currency
export function formatCurrency(amount, currency) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

// Populate options
export function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode} - 
        ${currencyName}</option>`
    )
    .join("");
}
