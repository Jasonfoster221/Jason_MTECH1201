let spaceship;
let cow;
let scene="start";
let phase=5000;
let current=0;
let save=0;
let lastteleport=0;
let timebetween=1000;
let r=255;
let g=225;
let b=0;
let a=50;
let s=50;
let d=200;
let x=300;
let y=320;
let hidden=false;
let timehit;
let score=0;

function preload() {
  spaceship=loadImage("images/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL2pvYjk2OC1lbGVtZW50LTA4OC1wXzEucG5n.webp");
  cow=loadImage("images/rodeo-cow-cartoonish-like-32x32-pixel-art-c79e.png");
}
  

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(a,s,d);
fill(50,100,100);
  triangle(0,400,400,400,200,200);
  sun(r,g,b);
  current=millis();
  let timesince=current-lastteleport;
  let timesincehit=current-timehit;
  //phases//
  if (current- save <= phase){
scene="start"
  }
  else if (current- save <= phase*2){
    scene="morning"
  }
  else if (current- save <= phase*3){
    scene="noon"
  }
  else if (current- save <= phase*4){
scene="night"
  }else{
    scene="gameover"
  }
  
  if(!hidden){ 
    image(cow,x,y,cow.width/15,cow.height/15);
  }
  else if(timesincehit>500){
hidden=false;
  }
  image(spaceship,mouseX,mouseY,spaceship.height/5,spaceship.width/5);
  //teleports//
  if (timesince > timebetween) {
    x=random(0,width-cow.width/15);
    lastteleport=current;
  }
 //checks if hit//
  if (mouseX<x+cow.width/15
    && mouseX+spaceship.width/5>x&&
  mouseY+spaceship.height/5>y&&
mouseY<y+cow.height/15&&
!hidden) {
  print("hit");
  hidden=true;
  timehit=current;
  score+1;
  }
  //settings//
  if ("start"==scene) {
    r=255;
    g=255;
    b=255;
    a=255;
    s=255;
    d=255;
    fill(255,0,0);
    textSize(25);
    text('get ready for fun',height/3,width/3)
  }
  else if ("morning"==scene) {
    r=255;
    g=255;
    b=0;
    a=50;
    s=50;
    d=200;
    fill(255,0,0);
    textSize(25);
    text('catch the cows',height/3,width/3)
  } else if("noon"==scene){
    r=200;
    g=200;
    b=0;
    a=200;
    s=100;
    d=0;
    fill(255,0,0);
    textSize(25);
    text('halfway there',height/3,width/3)
  } else if("night"==scene){
  r=255;
  g=255;
  b=255;
  a=0;
  s=0;
  d=0;
  fill(255,0,0);
  textSize(25);
  text('almost over',height/3,width/3)
} else if ("gameover"==scene){
r=0;
g=0;
b=0;
a=0;
s=0;
d=0;
fill(255,0,0);
    textSize(25);
    text('thanks for playing',height/3,width/3)
}
}

function sun(r,g,b) {
  fill(r,g,b),
  circle(200,100,200);
  strokeWeight(2);
}

function gamestart() {
  background(a,s,d);
fill(50,100,100);
  triangle(0,400,400,400,200,200);
  sun(r,g,b);
  save=current;
}

function mousePressed(){
  gamestart();
}
