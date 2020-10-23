// Select all checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// Save checked boxes
let lastChecked;
// Handle Change function
function handleCheck(e) {
  // Check it they had shift key down
  // And they are checking the box
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox == this || checkbox == lastChecked) {
        // Toggle in between
        console.log("inBetween");
        inBetween = !inBetween; // Flag variable
      }
      if (inBetween) {
        checkbox.check = true;
      }
    });
  }
  lastChecked = this;
}
// Add event listener to all checkboxes
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
