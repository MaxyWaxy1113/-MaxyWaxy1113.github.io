let state = "start screen";
let rainbow;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
}

function draw() {
  background(220);

  drawGradient();

  if (mouseIsPressed === true) {
    state = "color";
  }

  startScreen();
  endScreen();

  if (state === "color") {
    rainbow = prompt(
      "what is your favourite color of the rainbow?  If you would like to end, please type end"
    );
    rainbowGradient();
  }
  if (state === "end") {
    background(0);
    fill("blue");
    textSize(42);
    textAlign(CENTER, CENTER);
    text("Thanks for Playing!", width / 2, height / 2);
  }

  drawingContext.fillStyle = gradient;
  rect(width / 2, height / 2, 200, 200, 50);
}

function startScreen() {
  if (state === "start screen") {
    background(0);
    fill("blue");
    textSize(35);
    textAlign(CENTER, CENTER);
    text(
      "Click the mouse to start, type end to finish!",
      width / 2,
      height / 2
    );
  }
}

function endScreen() {}

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
  greenGradient();
  redGradient();
  yellowGradient();
  blueGradient();
  indigoGradient();
  violetGradient();
  orangeGradient();
}

function endScreen() {
  if (rainbow === "end"){
    state = "end";
}
}
