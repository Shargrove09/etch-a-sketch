const grid = document.getElementById("grid");
const reloadrBtn = document.getElementById("clear-btn");

reloadrBtn.onclick = () => reloadGrid();

function reloadGrid() {
  clearGrid();
  makeGrid(16, 16);
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
    grid.appendChild(cell).className = "grid-item";
  }

  console.log("Ran");
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
function changeColor(e) {
  if (e.type == "mouseover" && !mouseDown) return;

  e.target.style.backgroundColor = "black";
}

reloadGrid();
