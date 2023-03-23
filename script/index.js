// let gridBtn = document.querySelector("#grids");
let parentGrid = document.querySelector(".parent");
let range = document.querySelector("#range");
// let limit = document.querySelector('#limit')
let colorPlate = document.querySelector("#colorPalate");
let clearBtn = document.querySelector("#clearBtn");
let displayRange = document.querySelector("#range-val");
let rainBow = document.querySelector(".rainbow");
let getClr = document.querySelectorAll(".getclr");
let palateColor = document.querySelector(".palateColor");

// clearing previous grids when range is clicked
range.addEventListener("click", () => clearChildren());

// creating new grids when range is clicked
range.addEventListener("click", functionMain);

function createColors() {
  // calling mouse trail method
  console.log(color);
  let hovering = document.querySelectorAll(".check");
  hovering.forEach((child) => {
    child.addEventListener("mouseover", (e) => {
      e.target.style.background = generateColor();
    });
  });
}

function functionMain() {
  // displaying the range value dynamically
  displayRange.textContent = `${range.value} * ${range.value}`;

  // getting the limit of the grids
  let grid = range.value;

  // considering resources and memory, Limiting the total grids upto 30*30
  if (grid > 30) return alert("maximum limit : 30");

  // creating grid children
  for (let i = 0; i < grid * grid; i++) {
    let div = document.createElement("div");
    div.classList.add("check");
    parentGrid.style.gridTemplateColumns = `repeat(${grid} , 1fr)`;
    parentGrid.style.gridTemplateRows = `repeat(${grid} , 1fr)`;
    parentGrid.appendChild(div);
  }
  createColors();
}

let color = "rainbow";
colorPlate.addEventListener("click", () => {
  color = "palate";
});

rainBow.addEventListener("click", function () {
  color = "rainbow";
});

// generating  colors
function generateColor() {
  if (color == "rainbow") {
    return `rgb(${rand()},${rand()},${rand()})`;
  } else if (color == "palate") {
    return colorPlate.value;
  }
}

//Generating  random number
function rand() {
  return Math.floor(Math.random() * 255);
}

// clearing out the container
function clearChildren() {
  let child = parentGrid.children;
  Array.from(child).forEach((a) => parentGrid.removeChild(a));
}

clearBtn.addEventListener("click", clearChildren);

// setting the slider value to 0 when clear btn is pressed
clearBtn.addEventListener("click", function () {
  range.value = 0;
  displayRange.textContent = range.value;
});
