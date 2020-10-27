// Select all images
const imgs = document.querySelectorAll(".slide-in");

// check for scroll
function checkSlide(e) {
  imgs.forEach((img) => {
    // Give us were we are scrolling on the bottom part
    // halfway thru img
    const slideInAt = window.scrollY + window.innerHeight - img.height / 2;
    // Give us the distance from the top of the window to the height of the img
    // bottom of the img
    const imgBottom = img.offsetTop + img.height;
    const isHalfShown = slideInAt > img.offsetTop;
    const isNotScrolledPast = window.scrollY < imgBottom;
    console.log(imgBottom);
    console.log(isHalfShown);
    console.log(isNotScrolledPast);
    if (isHalfShown && isNotScrolledPast) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
}

// Run function every 20 miliseconds
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener("scroll", debounce(checkSlide));
