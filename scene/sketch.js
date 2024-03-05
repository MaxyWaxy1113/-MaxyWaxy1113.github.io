rainbow = prompt("what is your favorite color of the rainbow");
// figure out in class prompt ("Nice Choice, now check this out")

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(220);

  drawGradient();

  greenGradient();

  drawingContext.fillStyle = gradient;
  rect(width / 2, height / 2, 400, 400, 50);
}

function greenGradient() {
  gradient.addColorStop(0, color(255, 192, 203));
  gradient.addColorStop(1, color(150, 100, 100));
}

function favColor() {
  if (rainbow === "green") {
    greenGradient();
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
