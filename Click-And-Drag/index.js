// Select all items
const items = document.querySelector(".items");
// Flag variable if clicking
let isDown = false;
let startX;
let scrollLeft;
// Event Listeners
items.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  console.log(e);
});
items.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
items.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
items.addEventListener("mousemove", () => {
  if (!isDown) return;
});
