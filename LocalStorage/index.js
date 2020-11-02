// Form to add Tapas
const addItems = document.querySelector(".add-items");
// Plates div
const itemsList = document.querySelector(".plates");
// Store Data
const items = JSON.parse(localStorage.getItem("items")) || [];
// Select buttons
const delBtn = document.querySelector(".delete");
const checkAllBtn = document.querySelector(".checkAll");
const unCheckAllBtn = document.querySelector(".unCheckAll");

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item").value;
  const item = {
    text: text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
  console.log(items);
}

function populateList(items = [], platesList) {
  platesList.innerHTML = items
    .map((plate, i) => {
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

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function deleteAll(e) {
  console.log("click");
  items.length = 0;
  localStorage.removeItem("items");
  populateList(items, itemsList);
}
function checkAll(e) {
  items.map((item) => (item.done = true));
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}
function unCheckAll(e) {
  items.map((item) => (item.done = false));
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
delBtn.addEventListener("click", deleteAll);
checkAllBtn.addEventListener("click", checkAll);
unCheckAllBtn.addEventListener("click", unCheckAll);
populateList(items, itemsList);
