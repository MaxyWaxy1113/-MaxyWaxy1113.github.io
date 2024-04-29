let grid;

function setup() {
  createCanvas(300, 300); // Adjust canvas size as needed
  grid = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ]; // Define the 3x3 grid array
}

function draw() {
  background(255); // Set background color
  
  const cellSize = width / 3; // Calculate cell size based on canvas width
  
  // Nested loops to iterate through the grid array
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // Calculate coordinates for each cell
      const x = j * cellSize;
      const y = i * cellSize;
      
      // Check the value of the current cell in the grid array
      // If the value is 1, draw a filled square; otherwise, leave it empty
      if (grid[i][j] === 1) {
        fill(200); // Set fill color
        rect(x, y, cellSize, cellSize); // Draw filled square
      }
    }
  }
}