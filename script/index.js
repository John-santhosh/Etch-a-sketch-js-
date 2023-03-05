// let gridBtn = document.querySelector("#grids");
let parentGrid = document.querySelector(".parent");
let range = document.querySelector('#range')
// let limit = document.querySelector('#limit')
let colorPlate = document.querySelector("#colorPalate");
let clearBtn = document.querySelector('#clearBtn')
let displayRange = document.querySelector("#range-val");
let rainBow = document.querySelector('.rainbow')
let getClr = document.querySelectorAll(".getclr");

range.addEventListener('click',function(){
    // displaying the range value dynamically 
    displayRange.textContent = `${range.value} * ${range.value}`;

    // clearing previous board 
    clearChildren();

    // getting the limit of the grids 
    let grid = range.value; ;
    // limit.value="";

    // considering resources and memory limiting the total grids upto 30*30
    if(grid>30) return alert("maximum limit : 30")

    // creating grid children 
    for(let i=0 ; i< grid*grid ; i++){
    let div = document.createElement('div')
    div.classList.add("check");
    parentGrid.style.gridTemplateColumns = `repeat(${grid} , 1fr)`;
    parentGrid.style.gridTemplateRows = `repeat(${grid} , 1fr)`;
    parentGrid.appendChild(div)
    }

    // calling mouse trail method 
    let hovering = document.querySelectorAll('.check')
    hovering.forEach(child=>{
        child.addEventListener("mouseenter",generateRainbow)
    })
})

// function setColor(){
//     child.style.background = colorPlate.value;
// child.style.background = colorPlate.value;
//             getClr.forEach((a) =>
//                 a.addEventListener("click", (e) => {
//                 let color = e.target.name;
//                 let random = Math.floor(Math.random() * 255);
//             if (color === "rainbow")
//                 return (child.style.background = `hsl(${random},100%,50%)`);
//             else if (color === "palate")
//                 return (child.style.background = colorPlate.value);
//     })
//   );
//         });
//   })
// )
// }


//adding mouse trail effect / setting color
function mouseTrail(){
    // Here <this> refer the <child> from forEach 
    this.style.background=colorPlate.value
}

// generating rainbow colors
function generateRainbow(){
    let random = Math.floor(Math.random() * 255);
    this.style.background=`hsl(${random},100%,50%)`
//   return `hsl(${random},100%,50%)`;
}

// clearing out the container
function clearChildren(){
    let child = parentGrid.children;
    Array.from(child).forEach(a=>parentGrid.removeChild(a))
}

clearBtn.addEventListener('click',clearChildren)


// setting the slider value to 0 when clear btn is pressed
clearBtn.addEventListener('click',function(){
    range.value = 0;
    displayRange.textContent = range.value;
})
