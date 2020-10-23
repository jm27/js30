// Select all checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// Save checked boxes
let lastChecked;
// Handle Change function
function handleCheck(e) {
  console.log(e);
  // Check it they had shift key down
  // And they are checking the box
  if (e.shiftkey && this.checked) {
    //
  }
  lastChecked = this;
}
// Add event listener to all checkboxes
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
