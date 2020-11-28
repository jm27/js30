// get Rates
async function fetchRates(base = "USD") {
  const res = await fetch(
    `https://cors-anywhere.herokuapp.com/${endPoint}?base=${base}`
  );
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
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  return convertedAmount;
}
