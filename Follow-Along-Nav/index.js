// Get triggers
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

// functions for handling mouse in and out

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => {
    this.classList.add("trigger-enter-active");
  }, 150);
}
function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
