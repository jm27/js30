// imports
import { init } from "./init.js";

// Start App
const app = document.querySelector(".app");

app.addEventListener("mouseenter", init, { once: true });
