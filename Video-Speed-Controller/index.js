// Select Speed, Speed bar and video container
const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

// Add event listener for mouse move
speed.addEventListener("mousemove", function (e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;

  const height = Math.round(percent * 100) + "%";
  bar.style.height = height;
});
