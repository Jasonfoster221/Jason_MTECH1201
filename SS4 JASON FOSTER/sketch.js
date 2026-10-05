//Jason Foster//
//mountain timelapse//
// move mouse to change day//
// top left dawn//
//bottom left dusk//
//right is night//
let r=255;
let g=255;
let b=255;
//sun//
let a=255;
let s=225;
let d=0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(r,g,b);
   sun(a,s,d);
 fill(255,225,225);
triangle(0,400,400,400,200,100);
//dawn//
if (mouseX > width/2) {
  r=0;
  g=0;
  b=0;
  a=255;
  s=255;
  d=255;
  //night//
} else if(mouseY < height/2) {
  r=0,
  g=0;
  b=200;
  a=255;
  s=255;
  d=0;
  //dusk//
} else{
r=200;
g=100;
b=0;
a=200;
s=200;
d=0;
}
}

function sun(a,s,d) {
fill(a,s,d);
strokeWeight(4);
circle(200,100,200);
}