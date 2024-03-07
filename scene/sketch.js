


state = "start screen";

function setup() {
  createCanvas(800, 800);
  colorMode(RGB);
}

function draw() {
  background(220);

  drawGradient();

  startScreen();

  drawingContext.fillStyle = gradient;
  rect(width / 2, height / 2, 400, 400, 50);
}

startScreen();

function startScreen() {
  if (state === "start screen") {
    background(0)
    fill("blue");
    textSize(42);
    textAlign(CENTER, CENTER);
    text("Click the mouse to start!", width / 2, height / 2);
  }
}

function greenGradient() {
  if (rainbow === "green") {
    gradient.addColorStop(0, color(0, 255, 0));
    gradient.addColorStop(1, color(173, 216, 230));
  }
}

function redGradient() {
  if (rainbow === "red") {
    gradient.addColorStop(0, color(255, 0, 0));
    gradient.addColorStop(1, color(200, 190, 203));
  }
}

function yellowGradient() {
  if (rainbow === "yellow") {
    gradient.addColorStop(0, color(255, 255, 0));
    gradient.addColorStop(1, color(115, 147, 179));
  }
}

function blueGradient() {
  if (rainbow === "blue") {
    gradient.addColorStop(0, color(0, 0, 255));
    gradient.addColorStop(1, color(115, 147, 179));
  }
}

function indigoGradient() {
  if (rainbow === "indigo") {
    gradient.addColorStop(0, color(75, 0, 130));
    gradient.addColorStop(1, color(200, 100, 50));
  }
}

function violetGradient() {
  if (rainbow === "violet") {
    gradient.addColorStop(0, color(127, 0, 255));
    gradient.addColorStop(1, color(255, 0, 0));
  }
}

function orangeGradient() {
  if (rainbow === "orange") {
    gradient.addColorStop(0, color(255, 165, 0));
    gradient.addColorStop(1, color(255, 215, 0));
  }
}

function drawGradient() {
  gradient = drawingContext.createLinearGradient(
    width / 2 - 200,
    height / 2 - 200,
    width / 2 + 200,

    height / 2 + 200
  );
}

function rainbowGradient() {
  rainbow = prompt("what is your favorite color of the rainbow");
  greenGradient();
  redGradient();
  yellowGradient();
  blueGradient();
  indigoGradient();
  violetGradient();
  orangeGradient();
}
