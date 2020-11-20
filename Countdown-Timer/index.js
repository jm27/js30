// Store countdown in variable
let countdown;
// Select display time
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

// make function for timer
function timer(seconds) {
  // clear interval if running
  clearInterval(countdown);
  //when the timer started
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondLeft = Math.round((then - Date.now()) / 1000);
    // check if should stop
    if (secondLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondLeft);
  }, 1000);
}

// Display time left

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  } ${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
  console.log(seconds);
}

// Display end time

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${hour > 12 ? hour - 12 : hour}:${
    minutes < 10 ? "0" : minutes
  }${minutes}`;
}

// Get time attribute from buttons and set timer
function startTimer() {
  const seconds = parseInt(this.dataset.time);
  console.log(seconds);
  timer(seconds);
}
// Add event listener
buttons.forEach((btn) => btn.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
