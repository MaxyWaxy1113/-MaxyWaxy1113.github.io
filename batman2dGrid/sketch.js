// Max Liu
// 2d Grid Assignment
// Comp Sci 30
// April 29, 2024

let cols = 29; // setting dimensions of Grid
let rows = 29;
let colors = []; // empty array that is used to fill grid with red and dark red tiles
let state = "begin" // sets state to "begin", allowing the start screen function to run
let cellSize = 30;

function setup() {
  createCanvas(windowWidth, windowHeight); // Adjust canvas size as needed
  for (let i = 0; i < cols; i++) { // generated grid with red and dark red tiles, spots are picked at random
    colors[i] = [];
    for (let j = 0; j < rows; j++) {
      colors[i][j] = random (["darkred", "red"]) // fills in random tiles with a dark red or a red
    }
  }
  startScreen(); // displays start screen
  keyPressed(); // switches state once spacebar is pressed
}
      
function draw() { // draw loop, only executes once the state has been switched from "begin" to "start"
  if (state === "start") {
    myArray();
    colorChange();
  }
}
  
function myArray() { // base 2darray that creates a grid, the platform that the "colors" array inserts red or dark red squares into
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i*cellSize;
      let y = j*cellSize;
      stroke (0)
      fill(colors[i][j])
      rect(x, y, cellSize ,cellSize);
    }
  }
}

function colorChange() { // overarching function that draws the Bat logo
  for (let i = 0; i < cols; i++){ // I will be completely honest, I feel like this for loop is unnessacary but it was one of the first things I added when I started this assignment, and for some reason everything breaks if I get rid of it. Go Coder Max!
    for (let j = 0; j < rows; j++) {  
      middlecolumn();
      column1();
      column2();
      column3MirrorPair();
      column4MirrorPair();
      column5MirrorPair();
      column6MirrorPair();
      column7MirrorPair();
      column8MirrorPair();
      column9MirrorPair();
      column10MirrorPair();
      column11MirrorPair();
      column12MirrorPair();
      column13MirrorPair();
  }
      
function middlecolumn() { // creates middle column, everything is built around this column of squares. A specific column is picked, and a specific section of that column is iterated through. All squares within the specified section are filled in black
  let i = 14;
  if (i === 14) {
    for (let j = 12; j < 21; j++) {
      fill ("black")
      let x = i*cellSize;
      let y = j*cellSize;
      fill("black")
      rect(x, y, cellSize, cellSize)
    }
  }
}
    
function column1() { // column directly to the left of the middle column
  let i = 13;
  if (i === 13) {
    for (let j = 11; j < 20; j++) {
      let x = i*cellSize;
      let y = j*cellSize;
      fill("black")
      rect(x, y, cellSize, cellSize)
    }
  }
}

function column2() { // column directly to the right of the middle column
let i = 15;
  if (i === 15) {
    for (let j = 11; j < 20; j++) {
      let x = i*cellSize;
      let y = j*cellSize;
      fill("black")
      rect(x, y, cellSize, cellSize)
    }
  }
}

function column3MirrorPair() { // mirrored columns on either side of Batman, combined into one function. All functions containing "MirroredPair" were created due to the symmetry of the design
let i = 16;
if (i === 16) {
  for (let j = 13; j < 19; j++) {
    let x = i*cellSize;
    let y = j*cellSize;
    fill("black")
    rect(x, y, cellSize, cellSize)
  }
}

let a = 12  
  if (a === 12) {
    for (let j = 13; j < 19; j++){
      let x = a*cellSize;
      let y = j*cellSize;
      fill("black")
      rect(x, y, cellSize, cellSize)
    }
  }
}

function column4MirrorPair() { // pair of columns each 3 columns away from the center column. A specific column is picked, and a specific section of that column is iterated through. 
if (i === 17) {
  for (let j = 12; j < 19; j++) {
    let x = i*cellSize
    let y = j*cellSize
    fill("black")
    rect(x, y, cellSize, cellSize)
  }
}
let a = 11
  if (a === 11) {
    for (let j = 12; j < 19; j++) {
      let x = a*cellSize
      let y = j*cellSize
      fill("black")
      rect(x, y, cellSize, cellSize)
    }
  }
}

function column5MirrorPair() { // pair of columns each 4 columns away from the center column 
let i = 18;
if (i === 18) {
  for (let j = 10; j < 18; j++){
    let x = i*cellSize
    let y = j*cellSize
    fill("black")
    rect(x, y, cellSize, cellSize)
  }
} 
let a = 10; 
  if (a === 10) {
    for (let j = 10; j < 18; j++){
      let x = a*cellSize
      let y = j*cellSize
      fill("black")
      rect(x, y, cellSize, cellSize)
    }
  }
}

function column6MirrorPair() { // pair of columns each 5 columns away from the center column
let i = 19;
  if (i === 19) {
    for (let j = 10; j < 18; j++) {
      let x = i*cellSize
      let y = j*cellSize
      fill("black")
      rect(x, y, cellSize, cellSize)
    }
  }
  let a = 9;
  if (a === 9) {
    for (let j = 10; j < 18; j++) {
      let x = a*cellSize
      let y = j*cellSize
      fill("black")
      rect(x, y, cellSize, cellSize)
    }
  }
}

function column7MirrorPair() { // pair of columns each 6 columns away from the center column
let i = 20;
if (i === 20) {
  for (let j = 10; j < 17; j++) {
    let x = i*cellSize
    let y = j*cellSize
    fill("black")
    rect(x, y, cellSize, cellSize)
  }
}
let a = 8
  if (a === 8) {
    for (let j = 10; j < 17; j++) {
      let x = a*cellSize
      let y = j*cellSize
      fill("black")
      rect(x, y, cellSize, cellSize)
    }
  }
}

function column8MirrorPair() { // pair of columns each 7 columns away from the center column
let i = 21;
if (i === 21) {
  for (let j = 10; j < 17; j++) {
    let x = i*cellSize
    let y = j*cellSize
    fill("black")
    rect(x, y, cellSize, cellSize)
  }
}
let a = 7
  if (a === 7) {
    for (let j = 10; j < 17; j++) {
      let x = a*cellSize
      let y = j*cellSize
      fill("black")
      rect(x, y, cellSize, cellSize)
    }
  }
}

function column9MirrorPair() { // pair of columns each 8 columns away from the center column
let i = 22;
if (i === 22) {
  for (let j = 10; j < 17; j++) {
    let x = i*cellSize
    let y = j*cellSize
    fill("black")
    rect(x, y, cellSize, cellSize)
  }
}
let a = 6;
  if (a === 6) {
    for (let j = 10; j < 17; j++) {
      let x = a*cellSize
      let y = j*cellSize
      fill("black")
      rect(x, y, cellSize, cellSize)
    }
  }
}

function column10MirrorPair() { // pair of columns each 9 columns away from the center column
let i = 23;
if (i === 23) {
  for (let j = 10; j < 14; j++) {
    let x = i*cellSize
    let y = j*cellSize
    fill("black")
    rect(x, y, cellSize, cellSize)
  }
}
let a = 5;
  if (a === 5) {
    for (let j = 10; j < 14; j++) {
      let x = a*cellSize
      let y = j*cellSize
      fill("black")
      rect(x, y, cellSize, cellSize)
    }
  }
}

function column11MirrorPair() { // pair of columns each 10 columns away from the center column
let i = 24
if (i === 24) {
  for (let j = 10; j < 13; j++) {
    let x = i*cellSize
    let y = j*cellSize
    fill("black")
    rect(x, y, cellSize, cellSize)
  }
}
let a = 4
  if (a === 4) {
    for (let j = 10; j < 13; j++) {
      let x = a*cellSize
      let y = j*cellSize
      fill("black")
      rect(x, y, cellSize, cellSize)
    }
  }
}

function column12MirrorPair() { // pair of columns each 11 columns away from the center column
let i = 25
if (i === 25) {
  for (let j = 10; j < 12; j++) {
    let x = i*cellSize
    let y = j*cellSize
    fill("black")
    rect(x, y, cellSize, cellSize)
  }
}
let a = 3
  if (a === 3) {
    for (let j = 10; j < 12; j++) {
      let x = a*cellSize
      let y = j*cellSize
      fill("black")
      rect(x, y, cellSize, cellSize)
    }
  }
}

function column13MirrorPair() { // pair of singular squares each 12 columns away from the center column
  let i = 26
  if (i === 26) {
    let j = 10;
      let x = i*cellSize
      let y = j*cellSize
      fill("black")
      rect(x, y, cellSize, cellSize)
    }
  }
  let a = 2
  if (a === 2) {
      let j = 10;
      let x = a*cellSize
      let y = j*cellSize
      fill("black")
      rect(x, y, cellSize, cellSize)
    }
  }   
}

function startScreen() { // introductory screen
  if (state === "begin") {
    background(0);
    fill("blue");
    textSize(35);
    text ("Press spacebar to reveal", 1000, 450)
    text("the hero that Gotham needs,", 1000, 500);
    text("but not the one it deserves...", 1000, 550)
  }
}

function keyPressed() { // switches state to "start" once the spacebar is keyPressed, displaying Batman image
  if (key === " ") {
    state = "start";
  }
}



      
      
      
      
      
      
   
    

     
   
    
  


