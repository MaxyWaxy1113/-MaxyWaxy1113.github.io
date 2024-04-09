// Arrays and object notation scene
// Max Liu
// April 8, 2024
//
// Extra for Experts:
// utlized Collide 2d to detect collision between player controlled object and spawned obstacles 

let x;                  //setting state and global variables
let y;
let dx = 10;
let dy = 15;
let Obstacles = [];
let hit;
let state = "begin"


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2; 
  y = height - 30; // spawns rectangle at the bottom of the canvas
  window.setInterval(repeat, 500); // sets frequency of obstacle spawn
}
  
  

function draw() {
  background(220);
  fill (100);
  rect(x, y, 30, 30);
  introScreen(); 
  keyTyped();
  Movement();
  boundaryDetect();
  showObject();
  moveObstacles();  
  Collide();
  End();
  Restart();
}

function Movement() { // allows user to input "wasd" to move around the canvas
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

function boundaryDetect() { // if user exceeds the length/width of the canvas, a screen will be displayed prompting them to return to appropriate bonds
  if (x > width || x < 0) {
    background(0);
    fill("blue");
    textSize(35);
    textAlign(CENTER, CENTER);
    text("Please return to the canvas", width / 2, height / 2);
  }
  if (y > height || y < 0) {
    background(0);
    fill("blue");
    textSize(35);
    textAlign(CENTER, CENTER);
    text("Please return to the canvas", width / 2, height / 2);
  }
}

function spawnObject() { // objects are intially created and pushed into an array
  if (state === "start") {
    let someObject = {
      x: random(width),
      y: 0,
      color: "black",
      width: random (10, 30), 
      height: random (10, 30),
    };
    Obstacles.push(someObject);
  }
}
  
function showObject() { // physically displays objects within the "Obstacles array"
  if (state === "start") {
    for (let object of Obstacles) {
      fill("black");
      rect (object.x, object.y, object.width, object.height);
    } 
  }
}


function moveObstacles() { // constantly moves obstacles down the canvas 
  for (let object of Obstacles) {
    object.y = object.y += dy;
  }
}
   
function repeat() { // loops through each elemen within the array
  for (let i = 0; i < 7; i++){
    spawnObject();
  }
}

function Collide(){ // detects collision between user controlled object and spawned obstacles (collide 2d)
  for ( let object of Obstacles) {
    let hit = collideRectRect(object.x, object.y, object.width, object.height, x, y, 30, 30);
    if (hit === true){
      state = "over";
    }
  }
}

function End() { // displays end screen if user is unable to succesfully dodge an obstacle 
  if (state === "over") {
    background(0);
    fill("blue");
    textSize(35);
    textAlign(CENTER, CENTER);
    text("Game Over, press your mouse to play again!", width / 2, height / 2);
  }
}

function Restart(){ // changes state to start
  if (mouseIsPressed === true) {
    state = "start";
  }
}

function introScreen() { // displays information start screen
  if (state === "begin"){
    background(0);
    fill("blue");
    textSize(35);
    textAlign(CENTER, CENTER);
    text("Use WASD to move, careful not to get hit!, press spacebar to start", width / 2, height / 2);
  }
}

function keyTyped() { // changes state once spacebar is pressed, allowing user to begin the scene
  if (key === " ") {
    state = "start";
  }
}

    


    




  


   
    
    

