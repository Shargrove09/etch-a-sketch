const grid = document.getElementById("grid");
const gridSlider = document.getElementById("gridSlider");
const gridValue = document.getElementById("gridValue");

const colorPicker = document.getElementById("colorPicker");
const eraserCheckbox = document.getElementById("eraserCheckbox");
const rainbowCheckbox = document.getElementById("rainbowCheckbox");
const gridCheckbox = document.getElementById("gridCheckbox");

const gridItems = document.getElementsByClassName("grid-item");

let gridSize = gridSlider.value;

// Change grid slider value Text
gridSlider.oninput = function () {
  gridValue.innerText = gridSlider.value + " x " + gridSlider.value;
};

// Change gridSize when different size value is picked
gridSlider.onchange = function () {
  gridSize = gridSlider.value;
  reloadGrid();
};

// Check GridLine checkbox on change
gridCheckbox.addEventListener("change", (e) => {
  if (e.currentTarget.checked) {
    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].classList.remove("no-grid-lines");
      gridItems[i].classList.add("grid-lines");
    }
  } else {
    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].classList.remove("grid-lines");
      gridItems[i].classList.add("no-grid-lines");
    }
  }
});

const reloadrBtn = document.getElementById("clear-btn");

reloadrBtn.onclick = () => reloadGrid();

function reloadGrid() {
  console.log("GridSize", gridSize);
  clearGrid();
  gridSlider.value = gridSize;
  makeGrid(gridSize, gridSize);
  updateGridSizeValue(gridSize);
}

function updateGridSizeValue(val) {
  gridValue.innerText = val + " x " + val;
}

function clearGrid() {
  grid.innerHTML = "";
}

//Makes a grid of specficied size
function makeGrid(rows, cols) {
  grid.style.setProperty("--grid-rows", rows);
  grid.style.setProperty("--grid-cols", cols);
  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    cell.addEventListener("mousedown", changeColor);
    cell.addEventListener("mouseover", changeColor);
    grid.appendChild(cell).className = "grid-item grid-lines";
  }
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
function changeColor(e) {
  if (e.type == "mouseover" && !mouseDown) return;

  if (!eraserCheckbox.checked) {
    if (rainbowCheckbox.checked) {
      const randomR = Math.floor(Math.random() * 256);
      const randomG = Math.floor(Math.random() * 256);
      const randomB = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else {
      e.target.style.backgroundColor = colorPicker.value;
    }
  } else e.target.style.backgroundColor = "white";
}

reloadGrid();
