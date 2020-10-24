// Create key pressed array
const pressed = [];
const secretCode = "jesus";

// Listen to keyup event on window
window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode);
});
