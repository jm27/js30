// Get joke button and holder
const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke p");
// Select loader
const loader = document.querySelector(".loader");

// Button text
const buttonText = [
  "Ugh.",
  "🤦🏻‍♂️",
  "omg dad.",
  "you are the worst",
  "seriously",
  "stop it.",
  "please stop",
  "that was the worst one",
];

// fetch jokes function
async function fetchJoke() {
  // turn loader on
  loader.classList.remove("hidden");
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  // turn loader off
  loader.classList.add("hidden");
  return data;
}
// Change button text
function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    return randomItemFromArray(arr, not);
  }
  return item;
}

// When get joke is click fetch joke
async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(
    buttonText,
    jokeButton.textContent
  );
}

// Listen for click on get joke button
jokeButton.addEventListener("click", handleClick);
