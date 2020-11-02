// Form to add Tapas
const addItems = document.querySelector(".add-items");
// Plates div
const itemsList = document.querySelector(".plates");
// Store Data
const items = [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item").value;
  const item = {
    text: text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  this.reset();
  console.log(items);
}

function populateList(items = [], platesList) {
  platesList.innerHTML = items
    .map((plate, index) => {
      return `
    <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }/>
    <label for=''>${plate.text}</label>
    </li>
    `;
    })
    .join("");
}

addItems.addEventListener("submit", addItem);
