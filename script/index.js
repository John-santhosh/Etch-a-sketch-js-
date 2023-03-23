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

// Changing user preferred colors

// clearing previous grids when range is clicked
range.addEventListener("click", () => clearChildren());

// creating new grids when range is clicked
range.addEventListener("click", functionMain);

// creating colors
range.addEventListener("click", createColors);
let color = generateRainbow;

function createColors() {
  // calling mouse trail method
  console.log(color);
  let hovering = document.querySelectorAll(".check");
  hovering.forEach((child) => {
    child.addEventListener("mouseover", color);
  });
}

function functionMain() {
  // displaying the range value dynamically
  displayRange.textContent = `${range.value} * ${range.value}`;

  // getting the limit of the grids
  let grid = range.value;

  // considering resources and memory limiting the total grids upto 30*30
  if (grid > 30) return alert("maximum limit : 30");

  // creating grid children
  for (let i = 0; i < grid * grid; i++) {
    let div = document.createElement("div");
    div.classList.add("check");
    parentGrid.style.gridTemplateColumns = `repeat(${grid} , 1fr)`;
    parentGrid.style.gridTemplateRows = `repeat(${grid} , 1fr)`;
    parentGrid.appendChild(div);
  }
}

colorPlate.addEventListener("click", function () {
  color = mouseTrail;
  // range.value = 0;
  createColors();
  // console.log("mouse")
});

rainBow.addEventListener("click", function () {
  color = generateRainbow;
  // range.value = 0;
  createColors();
  // console.log('rainbow')
});

//adding mouse trail effect / setting color
function mouseTrail() {
  // Here <this> refer the <child> from forEach
  this.style.background = colorPlate.value;
  // return colorPlate.value;
}

// generating rainbow colors
function generateRainbow() {
  this.style.background = `rgb(${rand()},${rand()},${rand()})`;
  //   return `rgb(${rand()},${rand()},${rand()})`;
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
