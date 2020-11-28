// imports
import { generateOptions } from "./utils.js";
import currencies from "./currencies.js";
import { handleInput } from "./handler.js";
import { fromSelect, toSelect } from "./elements.js";

// When page loads
const form = document.querySelector(".app form");

const optionsHTML = generateOptions(currencies);

// Populate HTML element
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

// Listen input event on form
form.addEventListener("input", handleInput);
