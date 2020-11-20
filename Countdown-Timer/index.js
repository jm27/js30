// Store countdown in variable
let countdown;

// make function for timer
function timer(seconds) {
  //when the timer started
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(secondLeft);

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
  console.log(seconds);
}
