// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


rainbow = prompt("what is your favorite color of the rainbow");
// figure out in class prompt ("Nice Choice, now check this out")

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(220);

  

  drawGradient();

  colorGradient();

  drawingContext.fillStyle = gradient;
  rect(width / 2, height / 2, 400, 400, 50);
}

function colorGradient() {
  function greenGradient() {
    gradient.addColorStop(0, color(255, 192, 203));
    gradient.addColorStop(1, color(150, 100, 100));
  }
  
  function redGradient () {
    gradient.addColorStop(0, color(255, 0, 0));
    gradient.addColorStop(1, color(200, 100, 100));
  }
  
  function yellowGradient() {
    gradient.addColorStop(0, color(255, 255, 0));
    gradient.addColorStop(1, color(150, 150, 150));
  }
  
  function indigoGradient() {
    gradient.addColorStop(0, color(128, 0, 128));
    gradient.addColorStop(1, color(255, 192, 203));
  }
  
  function orangeGradient() {
    gradient.addColorStop(0, color(255, 165, 0));
    gradient.addColorStop(1, color(255, 0, 0));
  }
  
  function blueGradient() {
    gradient.addColorStop(0, color(0, 0, 255));
    gradient.addColorStop(1, color(48, 213, 200));
  }
  
  function violetGradient() {
    gradient.addColorStop(0, color(143, 0, 255));
    gradient.addColorStop(1, color(150, 150, 150));
  }
  
  function favColor() {
    if (rainbow === "green") {
      greenGradient();
    if (rainbow === "blue"){
      blueGradient();
    }
    }
  }
    rect(width/2, height/2, 400, 400, 50)
  }
  
  function drawGradient() {
    gradient = drawingContext.createLinearGradient(
      width / 2 - 200,
      height / 2 - 200,
      width / 2 + 200,
  
      height / 2 + 200
    );
  }
  

}
