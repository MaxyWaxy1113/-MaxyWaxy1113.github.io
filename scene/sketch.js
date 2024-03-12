// Max Liu
// Interactive Scene
// Comp Sci 30 - P4
// March 11, 2024





let state = "start screen"; //defining global variables
let rainbow;
let sideLength = 500

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
}

function draw() {  // draw loop
  background(220);
  drawGradient();
  stateChange();
  startScreen();
  getColor();
  rainbowGradient();
  endScreen();
  gameOver();
  drawingContext.fillStyle = gradient; // initializing fill style of shape to be a gradient
  rect(windowWidth / 2 - sideLength/2, windowHeight / 2 - sideLength / 2, sideLength, sideLength, 100); // rounded square corners by adding corner radius values
}
 


function startScreen() { // sets background to a start screen with informational text
  if (state === "start screen") {
    background(0);
    fill("blue");
    textSize(35);
    textAlign(CENTER, CENTER);
    text("Click the mouse to start, type end to finish!", width / 2, height / 2);
  }
}

function greenGradient() { // Creating gradient function for all colours within the rainbow
  if (rainbow === "green" || rainbow === "Green") {
    gradient.addColorStop(0, color(0, 255, 0));
    gradient.addColorStop(1, color(173, 216, 230));
  }
}

function redGradient() {
  if (rainbow === "red" || rainbow === "Red") {
    gradient.addColorStop(0, color(255, 0, 0));
    gradient.addColorStop(1, color(255, 165, 0));
  }
}

function yellowGradient() {
  if (rainbow === "yellow" || rainbow === "Yellow") {
    gradient.addColorStop(0, color(255, 255, 0));
    gradient.addColorStop(1, color(255, 0, 0));
  }
}

function blueGradient() {
  if (rainbow === "blue" || rainbow === "Blue") {
    gradient.addColorStop(0, color(0, 0, 255));
    gradient.addColorStop(1, color(115, 147, 179));
  }
}

function indigoGradient() {
  if (rainbow === "indigo" || rainbow === "Indigo") {
    gradient.addColorStop(0, color(75, 0, 130));
    gradient.addColorStop(1, color(200, 100, 50));
  }
}

function violetGradient() {
  if (rainbow === "violet" || rainbow === "Violet") {
    gradient.addColorStop(0, color(127, 0, 255));
    gradient.addColorStop(1, color(255, 0, 0));
  }
}

function orangeGradient() {
  if (rainbow === "orange" || rainbow === "Orange") {
    gradient.addColorStop(0, color(255, 165, 0));
    gradient.addColorStop(1, color(255, 20, 60));
  }
}

function drawGradient() { // setting the point of transition of the gradient
  gradient = drawingContext.createLinearGradient(windowWidth / 2 - 100, windowHeight / 2 - 100, windowWidth / 2 + 100, windowHeight / 2 + 100);
}

function rainbowGradient() { // overarching function that houses all functions executed with regards to a color input
  greenGradient();
  redGradient();
  yellowGradient();
  blueGradient();
  indigoGradient();
  violetGradient();
  orangeGradient();
}

function stateChange() { // changes state and begins the draw loop
  if (mouseIsPressed === true){
    state = "color";
  }
}

function endScreen() { // changes state and ends the draw loop
  if (rainbow === "end"){
    state = "end";
}
}

function getColor() { // obtains value for "rainbow" variable
  if (state === "color") {
    rainbow = prompt("What is your favourite color of the rainbow? If you would like to end, please type end.")
  }
}

function gameOver(){ // changes background to an end screen
  if (state === "end") {
    background(0)
    fill ("blue")
    textSize (35)
    textAlign (CENTER, CENTER)
    text ("Thanks for playing!", width/2, height/2);
 }
}


