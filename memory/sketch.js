// 2D Grid
// Dan Schellenberg
// Apr 9, 2024

let gameGrid = createGrid(10);

function setup() {


  createCanvas(windowWidth, windowWidth);
  

}

function draw() {
  background(220);
  displayGrid(gameGrid, 50);
  
}

function createGrid (size) {
  let newGrid = [];
  for (let i = 0; i < size; i++) {
    newGrid[i] = [];
    for (let j = 0; j < size; j++) {
      if (random(100) > 50) {
        newGrid[i][j] = 1;
      }
      else {
        newGrid[i][j] = 0;
      }

    }
  }
  

  return newGrid;
}

function displayGrid (grid, squareSize) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        fill(0);
        rect(i*squareSize, j*squareSize, squareSize, squareSize);
      }
      else {
        fill(255)
        rect(i*squareSize, j*squareSize, squareSize, squareSize);
      }
    }
  }
}


