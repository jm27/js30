// Select all inputs in the page
const inputs = document.querySelectorAll(".controls input");

// Function to handle updates
function handleUpdate() {
  console.log(this.value);
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
// Listen to update on each input
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
