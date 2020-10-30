// Grab hero div and text
const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");

// Shadow function
function shadow(e) {
  //   console.log(e);
  // Destructure width and height of hero
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
  }

  console.log(x, y);
}
// Add event listeners
hero.addEventListener("mousemove", shadow);
