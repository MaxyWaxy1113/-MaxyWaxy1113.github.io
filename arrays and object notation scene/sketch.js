// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let dx = 10;
let dy = 15;
let Obstacles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height - 30;

  window.setInterval(repeat, 500);
 
}

function draw() {
  background(220);
  fill (100);
  rect(x, y, 30, 30);
  Movement();
  boundaryDetect();
  showObject();
  moveObstacles();  
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

function spawnObject() {
  let someObject = {
    x: random(width),
    y: 0,
    color: "black",
    width: random (10, 30), 
    height: random (10, 30),
  };
    
   
  Obstacles.push(someObject);
}

function showObject() {
  for (let object of Obstacles) {
    fill("black");
    rect (object.x, object.y, object.width, object.height);
  } 
}
    
function moveObstacles() {
  for (let object of Obstacles) {
    object.y = object.y += dy;
  }
}

function repeat() {
  for (let i = 0; i < 7; i++){
    spawnObject();
  }
}
    
   
    
    

