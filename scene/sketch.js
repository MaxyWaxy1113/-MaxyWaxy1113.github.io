// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


Cookies
The p5.js Editor uses cookies. Some are essential to the website functionality and allow you to manage an account and preferences. Others are not essential—they are used for analytics and allow us to learn more about our community. We never sell this data or use it for advertising. You can decide which cookies you would like to allow, and learn more in our Privacy Policy.


Allow All

Allow Essential
File
Edit
Sketch
Help
English
Log in
or
Sign up



Auto-refresh

Gravity simulation
by NC_Productions



sketch.js
1
let planets,
2
    translation;
3
​
4
function setup() {
5
  createCanvas(800, 800);
6
  planets = [
7
    new Planet(10000, 400, 400, 0, 0, "#EC5"),
8
    new Planet(15, 200, 400, 0, -16, "#5CE"),
9
    new Planet(50, 400, 700, 15, 0, "#5EA"),
10
    new Planet(100, 400, 0, 13, 0, "#CCC")
11
  ]
12
  translation = createVector(0, 0);
13
  //frameRate(20);
14
}
15
​
16
function draw() {
17
  translate(translation);
18
  background(22);
19
  for (let a = 0; a < planets.length; a++) {
20
    for (let b = 0; b < planets.length; b++) {
21
      planets[a].calculateForce(planets[b]);
22
    }
23
  }
24
  for (const planet of planets) {
25
    planet.applyForce();
26
    planet.show();
27
  }
28
  // planet[0].speed = createVector(0, 0);
29
  if (keyIsPressed) {
30
    switch (key) {
31
      case "ArrowLeft":
32
        translation.x += 1;
33
        break;
34
      case "ArrowRight":
35
        translation.x -= 1;
There are no lint messages
Current line

Console
Clear

Preview

