// JSON file with Cities
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// Save cities in an Array
const cities = [];
// Get cities from Url
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

// Function to filter cities
function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // Create Regex to match word
    const regex = new RegExp(wordToMatch, "gi"); // global, insensitive
    // Check if city or state matches what is searched
    return place.city.match(regex) || place.state.match(regex);
  });
}
// Display function
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${value}</span>`
      );
      return `
      <li>
      <span class="name"> ${cityName}, ${stateName}</span>
      <span class="population"> ${place.population}</span>
      </li>
      `;
    })
    .join("");
  suggestions.innerHTML = html;
}
// Select Search input and suggestions
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
// Event listener for change in search input
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
