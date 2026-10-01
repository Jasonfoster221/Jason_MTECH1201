let a=(60);
let b=(75);
let c=(25);

function setup() {
  createCanvas(400, 400);
  //Jason Foster//
  //Mountain snowfall//
  //pressed key to make snow//
  //pressed mouse to reset//
  //in this i am using this to help in my ultimate goal//
  //which is making a cartoon background//
    reset();
  }

function draw() {
  //clouds//
  strokeWeight(0);
  fill(100,100,100);
  ellipse(50,50,80,40,);
  ellipse(350,50,80,40);
  ellipse(80,50,80,40);
  ellipse(320,50,80,40);
  ellipse(200,50,80,40);
  ellipse(180,50,80,40);
  ellipse(220,50,80,40);
  //snow//
  snow(a,b,c);
  snow(a+300,b,c);
  snow(a+150,b,c);
}
function keyPressed() {
  let snowX=random(60,360);
  let snowY=random(75,400);
  snow(snowX,snowY,c);
}

function snow(a,b,c) {
fill(300,300,300);
circle(a,b,c);
}

function reset() {
 background(220);
   strokeWeight(0);
  fill(0,0,100);
  triangle(0,400,350,380,100,200);
  triangle(0,400,400,400,300,200);
  strokeWeight(2);
  triangle(0,400,400,400,200,200);
} 

function mousePressed () {
reset();
}