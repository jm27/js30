// Get joke button and holder
const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke p");
// Select loader
const loader = document.querySelector(".loader");


// Listen for click on get joke button
jokeButton.addEventListener("click", handleClick);
