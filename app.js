const container = document.getElementById("container"); 


//Makes a grid of specficied size
function makeGrid(rows, cols) { 
  container.style.setProperty('--grid-rows', rows); 
  container.style.setProperty('--grid-cols', cols); 
  for (i = 0; i < (rows * cols); i++) { 
    let cell = document.createElement("div"); 
    container.appendChild(cell).className = "grid-item"; 
  }

  console.log("Ran")
}

makeGrid(16, 16)
