let x=(400);
let y=(0);
function setup() {

  createCanvas(400, 400);
  //Jason Foster//
  //the sun set//
  //i want to learn how to move objects these are the first steps//
//click mouse to move sun//
//pressed any key to restart sun setting//
}

function draw() {
  background(220);
  fill(0,0,0);
  triangle(0,400,400,400,200,mouseX,mouseY);
  fill(255,255,0);
  //here comes the sun//
circle(x,y,100);
y=y+1;
//these are clouds//
fill(255);
quad(50,62,86,50,50,38,14,50);
quad(300,62,386,50,300,38,264,50);
}

function mousePressed() {
  x=x-15;
}

function keyPressed() {
  y=0;
}