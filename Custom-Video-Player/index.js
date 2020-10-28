// Select Video Elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
// build functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[[this.name]] = this.value;
  console.log(this.name);
  console.log(this.value);
}

function scrub(e) {
  const scrubTime = (e.offsetx / progressBar.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  console.log(e);
}

function hangleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}`;
}

// Connect event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", updateButton);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
progressBar.addEventListener("click", scrub);
