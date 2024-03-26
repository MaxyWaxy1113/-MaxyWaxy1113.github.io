// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let dx = 10;
let dy = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2
  y = height - 30
}

function draw() {
  background(220);
  fill (100);
  rect(x, y, 30, 30);
  Movement();
  boundaryDetect();
}
   

function Movement() {
  if (keyIsDown(65)){
    x -= dx;
  }
  if (keyIsDown(68)){
    x += dx;
  }
  if (keyIsDown(87)) {
    y -= dy;
  }
  if (keyIsDown(83)){
    y += dy;
  }
}

function boundaryDetect() {
  if (x > width || x < 0) {
    background(0);
  }
  if (y > height || y < 0) {
    background(0);
  }
}

