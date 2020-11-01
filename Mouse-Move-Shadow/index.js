// Grab hero div and text
const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100; //px

// Shadow function
function shadow(e) {
  //   console.log(e);
  // Destructure width and height of hero
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
  ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
  ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.7),
  ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)`;
}
// Add event listeners
hero.addEventListener("mousemove", shadow);