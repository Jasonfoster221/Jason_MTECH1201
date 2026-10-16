let spaceship;
let cow;
let scene="morning";
let phase=5000;
let current=0;
let save=0;
let r=255;
let g=225;
let b=0;
let a=50;
let s=50;
let d=200;

function preload() {
  spaceship=loadImage("images/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL2pvYjk2OC1lbGVtZW50LTA4OC1wXzEucG5n.webp");
  cow=loadImage("images/rodeo-cow-cartoonish-like-32x32-pixel-art-c79e.png");
}
  

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(a,s,d);
  current=millis();
  if (current- save <= phase){
scene="morning"
  }
  else if (current- save <= phase*2){
    scene="noon"
  }
  else if (current- save <= phase*3){
    scene="night"
  }
  else{save=current;

  }
  fill(50,100,100);
  triangle(0,400,400,400,200,200);
  sun(r,g,b);
  fill(255,255,255);
  quad(50,310,80,310,80,340,50,340);
  quad(20,340,80,340,80,380,20,380);
  line(20,380,20,400);
  line(80,380,80,400);
  image(spaceship,mouseX,mouseY,height/10,width/10);
  if ("morning"==scene) {
    r=255;
    g=255;
    b=0;
    a=50;
    s=50;
    d=200;
  } else if("noon"==scene){
    r=200;
    g=200;
    b=0;
    a=200;
    s=100;
    d=0;
  } else if("night"==scene){
  r=255;
  g=255;
  b=255;
  a=0;
  s=0;
  d=0;
}
}

function sun(r,g,b) {
  fill(r,g,b),
  circle(200,100,200);
  strokeWeight(2);
}