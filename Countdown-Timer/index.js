// Store countdown in variable
let countdown;
// Select display time
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");

// make function for timer
function timer(seconds) {
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
  endTime.textContent = `Be back at ${hours}:${minutes}`;
}
