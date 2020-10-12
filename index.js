window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(key);
  if (!audio) return; // stop function from running
  audio.currentTime = 0; // rewind to start
  audio.play();
  key.classList.add("playing");
});

function removeTransition(e) {
    console.log(e)
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

