rainbow = prompt("what is your favorite color of the rainbow");
// figure out in class prompt ("Nice Choice, now check this out")

function setup() {
  createCanvas(800, 800);
  colorMode(RGB);
}

function draw() {
  background(220);

  drawGradient();

  greenGradient();
  redGradient();
  yellowGradient();

  drawingContext.fillStyle = gradient;
  rect(width / 2, height / 2, 400, 400, 50);
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

function drawGradient() {
  gradient = drawingContext.createLinearGradient(
    width / 2 - 200,
    height / 2 - 200,
    width / 2 + 200,

    height / 2 + 200
  );
}






