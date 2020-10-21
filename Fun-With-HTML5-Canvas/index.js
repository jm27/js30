// Select Canvas element
const canvas = document.querySelector("#draw");
// Grab Context from canvas
const ctx = canvas.getContext("2d");
// Set height and width to be equal to window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Change Stroke style
ctx.lineJoin = "round"; // End of the line
ctx.lineCap = "round"; // Line meets other line
// Flag Variables to set state
let isDrawing = 0;
// Set X and Y coordinates
let lastX = 0;
let lastY = 0;
// HUE color
let hue = 0;
// Set direction
let direction = true;
// Function to start drawing
function draw(e) {
  if (!isDrawing) return; // if not drawing return
  console.log(e);
  ctx.beginPath(); // Start drawing
  ctx.moveTo(lastX, lastY); // Move to x and y
  ctx.lineTo(e.offsetX, e.offsetY); // Create line to x and y from event
  ctx.stroke(); // Paint
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // Color
  // Set variables equal to lastX and lastY
  [lastX, lastY] = [e.offsetX, e.offsetY]; // Destructuring
  hue++; // Increment hue
  hue >= 360 ? (hue = 0) : ""; // if hue is bigger than 360 reset count
  ctx.lineWidth >= 100 || ctx.lineWidth <= 1 ? (direction = !direction) : "";
  direction ? ctx.lineWidth++ : ctx.lineWidth--; // if direction is tru line width grows else make smaller
}
// Add event listeners
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]; // Destructuring
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mousedout", () => (isDrawing = false));
