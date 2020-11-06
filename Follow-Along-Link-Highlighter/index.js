// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
// Select all links
const links = document.querySelectorAll("a");
const highlight = document.createElement("span");

highlight.classList.add("highlight");

document.body.append(highlight);

function hightlightLink() {
  // We get the coordinates of where the element lives in the DOM
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

links.forEach((a) => a.addEventListener("mouseenter", hightlightLink));
