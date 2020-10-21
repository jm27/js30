const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];
const p = document.querySelector("p");

function makeGreen() {
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello");
// Interpolated
console.log("Hello I am a %s string", "string");
// Styled
// console.log(
//   "%c I am some great text",
//   "font-size:30px; background:red; text-shadow:10px 10px 0 blue"
// );
// warning!
console.warn("OH NOOO!");
// Error :|
console.error("SHIT!");
// Info
console.info("Crocrodiles ear 3-4 people per year");
// Testing
console.assert(1 == 2, "you did not select the right element ");
// clearing
console.clear();
// Viewing DOM Elements
console.dir(p);
// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count("jesus");
console.count("jesus");
console.count("jesus");
console.count("jesus");
console.count("jesus");
// timing
console.time("fetching data");
fetch("https://api.github.com/users/jm27")
  .then((response) => response.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
