// HTML selectors
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date(); // todays date
  // Seconds
  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  // Minutes
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  // Hours
  const hours = now.getHours();
  const hoursDegrees = (hours / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log(hours, minutes, seconds);
}
// Run setDate every second
setInterval(setDate, 1000);
