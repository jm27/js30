// Get HTML selects
const fromSelect = document.querySelector('[name="from_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toSelect = document.querySelector('[name="to_currency"]');
const form = document.querySelector(".app form");
const toEl = document.querySelector(".to_amount");
const endPoint = "http://api.exchangeratesapi.io/latest";
// Cache Rates
const ratesByBase = {};

const currencies = {
  USD: "United States Dollar",
  AUD: "Australian Dollar",
  BGN: "Bulgarian Lev",
  BRL: "Brazilian Real",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CNY: "Chinese Yuan",
  CZK: "Czech Republic Koruna",
  DKK: "Danish Krone",
  GBP: "British Pound Sterling",
  HKD: "Hong Kong Dollar",
  HRK: "Croatian Kuna",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Sheqel",
  INR: "Indian Rupee",
  JPY: "Japanese Yen",
  KRW: "South Korean Won",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  NOK: "Norwegian Krone",
  NZD: "New Zealand Dollar",
  PHP: "Philippine Peso",
  PLN: "Polish Zloty",
  RON: "Romanian Leu",
  RUB: "Russian Ruble",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  THB: "Thai Baht",
  TRY: "Turkish Lira",
  ZAR: "South African Rand",
  EUR: "Euro",
};

// Populate options
function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode} - 
      ${currencyName}</option>`
    )
    .join("");
}

// get Rates
async function fetchRates(base = "USD") {
  const res = await fetch(`${endPoint}?base=${base}`);
  const rates = await res.json();
  return rates;
}

// Convert Function
async function convert(amount, from, to) {
  // Check if we have the rate
  if (!ratesByBase[from]) {
    console.log(`We dont have ${from} to convert to ${to}`);
    const rates = await fetchRates(from);
    // Store for next time
    ratesByBase[from] = rates;
  }
  // Convert amount passed in
  const convertedAmount = ratesByBase[from].rates[to];
  return convertedAmount;
}

// Format currency
function formatCurrency(amount, currency) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

// Handle typing on form
async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}

const optionsHTML = generateOptions(currencies);

// Populate HTML element
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

// Listen input event on form
form.addEventListener("input", handleInput);
