// Select all elements with class name panels
const panels = document.querySelectorAll(".panel");
// Create toggle function for class open
function toggleOpen() {
  this.classList.toggle("open");
}
// Creat funtion for toggle class Active
function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
  //   console.log(e.propertyName);
}
// Add event listener to each panel element
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
// Add event listener for transition of element
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
