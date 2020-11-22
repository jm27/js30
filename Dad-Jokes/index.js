// Get joke button and holder
const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke p");

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
  response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
}

// When get joke is click fetch joke
async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
}

// Listen for click on get joke button
jokeButton.addEventListener("click", handleClick);
