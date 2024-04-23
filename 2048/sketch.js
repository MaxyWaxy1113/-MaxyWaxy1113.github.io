let grid;
let cols = 4;
let rows = 4;
let cellSize = 100;
let score = 0;

let slidingTiles = [];

function setup() {
  createCanvas(cols * cellSize, rows * cellSize);
  grid = createEmptyGrid();
  addNumber();
  addNumber();
}

function draw() {
  background(255);
  updateSlidingTiles();
  drawGrid();
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  text('Score: ' + score, width / 2, height + 50);
}
 

function keyPressed() {
  if (keyIsDown(LEFT_ARROW)) {
    moveLeft();
  } else if (keyIsDown(RIGHT_ARROW)) {
    moveRight();
  } else if (keyIsDown(UP_ARROW)) {
    moveUp();
  } else if (keyIsDown(DOWN_ARROW)) {
    moveDown();
  }
}

function createEmptyGrid() {
  let emptyGrid = [];
  for (let i = 0; i < cols; i++) {
    emptyGrid.push([]);
    for (let j = 0; j < rows; j++) {
      emptyGrid[i].push(0);
    }
  }
  return emptyGrid;
}

function drawGrid() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let val = grid[i][j];
      let x = i * cellSize;
      let y = j * cellSize;
      fill(getColor(val));
      strokeWeight(2);
      stroke(0);
      rect(x, y, cellSize, cellSize);
      if (val !== 0) {
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(32);
        text(val, x + cellSize / 2, y + cellSize / 2);
      }
    }
  }
}



function updateSlidingTiles() {
  for (let i = slidingTiles.length - 1; i >= 0; i--) {
    let tile = slidingTiles[i];
    let { x, y, startX, startY } = tile;
    let targetX = x * cellSize;
    let targetY = y * cellSize;
    let currentX = lerp(startX, targetX, 0.1);
    let currentY = lerp(startY, targetY, 0.1);
    if (abs(currentX - targetX) < 1 && abs(currentY - targetY) < 1) {
      slidingTiles.splice(i, 1);
      grid[x][y] = tile.value;
    } else {
      tile.startX = currentX;
      tile.startY = currentY;
    }
  }
}

function getColor(val) {
  switch (val) {
    case 0:
      return 200;
    case 2:
      return '#eee4da';
    case 4:
      return '#ede0c8';
    case 8:
      return '#f2b179';
    case 16:
      return '#f59563';
    case 32:
      return '#f67c5f';
    case 64:
      return '#f65e3b';
    case 128:
      return '#edcf72';
    case 256:
      return '#edcc61';
    case 512:
      return '#edc850';
    case 1024:
      return '#edc53f';
    case 2048:
      return '#edc22e';
    default:
      return '#ff0000';
  }
}

function addNumber() {
  let options = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] === 0) {
        options.push({ x: i, y: j });
      }
    }
  }
  if (options.length > 0) {
    let spot = random(options);
    let r = random(1);
    grid[spot.x][spot.y] = r > 0.1 ? 2 : 4;
    slidingTiles.push({ x: spot.x, y: spot.y, value: grid[spot.x][spot.y], startX: (spot.x - 1) * cellSize, startY: spot.y * cellSize });
  }
}

function moveLeft() {
  for (let j = 0; j < rows; j++) {
    for (let i = 1; i < cols; i++) {
      if (grid[i][j] !== 0) {
        let val = grid[i][j];
        let nextI = i - 1;
        while (nextI >= 0 && grid[nextI][j] === 0) {
          grid[nextI][j] = val;
          grid[nextI + 1][j] = 0;
          nextI--;
        }
        if (nextI >= 0 && grid[nextI][j] === val) {
          grid[nextI][j] *= 2;
          score += grid[nextI][j];
          grid[nextI + 1][j] = 0;
        }
      }
    }
  }
  addNumber();
}

function moveRight() {
  for (let j = 0; j < rows; j++) {
    for (let i = cols - 2; i >= 0; i--) {
      if (grid[i][j] !== 0) {
        let val = grid[i][j];
        let nextI = i + 1;
        while (nextI < cols && grid[nextI][j] === 0) {
          grid[nextI][j] = val;
          grid[nextI - 1][j] = 0;
          nextI++;
        }
        if (nextI < cols && grid[nextI][j] === val) {
          grid[nextI][j] *= 2;
          score += grid[nextI][j];
          grid[nextI - 1][j] = 0;
        }
      }
    }
  }
  addNumber();
}

function moveUp() {
  for (let i = 0; i < cols; i++) {
    for (let j = 1; j < rows; j++) {
      if (grid[i][j] !== 0) {
        let val = grid[i][j];
        let nextJ = j - 1;
        while (nextJ >= 0 && grid[i][nextJ] === 0) {
          grid[i][nextJ] = val;
          grid[i][nextJ + 1] = 0;
          nextJ--;
        }
        if (nextJ >= 0 && grid[i][nextJ] === val) {
          grid[i][nextJ] *= 2;
          score += grid[i][nextJ];
          grid[i][nextJ + 1] = 0;
        }
      }
    }
  }
  addNumber();
}

function moveDown() {
  for (let i = 0; i < cols; i++) {
    for (let j = rows - 2; j >= 0; j--) {
      if (grid[i][j] !== 0) {
        let val = grid[i][j];
        let nextJ = j + 1;
        while (nextJ < rows && grid[i][nextJ] === 0) {
          grid[i][nextJ] = val;
          grid[i][nextJ - 1] = 0;
          nextJ++;
        }
        if (nextJ < rows && grid[i][nextJ] === val) {
          grid[i][nextJ] *= 2;
          score += grid[i][nextJ];
          grid[i][nextJ - 1] = 0;
        }
      }
    }
  }
  addNumber();
}
