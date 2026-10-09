let a= 100;
let b= 200;
let c= 50;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(a,b,c);
  rect(20,20,100,100);
  if (mouseX > width/2) {
    a=200;
    b=50;
    c=100;
  } else {
    a=100;
    b=200;
    c=50;
}
}
