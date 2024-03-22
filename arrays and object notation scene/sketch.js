// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let dx = 10;
let dx2 = -10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2
}

function draw() {
  background(220);
  fill (100);
  rect(x, height - 10, 10, 10);
  Movement();
}

function Movement() {
  if (keyIsDown(65)){
    x -= dx;
  }
}