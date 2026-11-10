//Jason Foster//
//snow falling//
//press mouse to change backdrop//
//press key to make it snow//
let snow=[];
let snowy=[];
let sty=0;
let backdrops=[];
let backdropIndex=0;
let falling=false;
let yd=10;
let ysh=10;
let snowheight;
function setup() {
  createCanvas(400, 400);
  backdrops[0]=color(50,50,200);
  backdrops[1]=color(200,100,0);
  backdrops[2]=color(0,0,0);
}

function draw() {
  background(backdrops[backdropIndex]);
  //mountain//
  fill(255,0,0);
  strokeWeight(2);
triangle(0,400,200,200,400,400);
strokeWeight(0);
  //snow//
  if (falling) {
    for (let s = 0; s < snow.length; s++) {
      let stx=snow[s];
      let ydiff=snowy[s];
      let y=sty-ydiff;
      let ex=random(stx+ysh,stx-ysh);
      let ey=random(y+ysh,y-ysh);
     fill(255,255,255);
     circle(ex,ey,20);
    
     }
     sty++;
   }
  if (sty>=height+snowheight) {
    falling=false;
    sty=0;
    snow=[];
    snowy=[];
  }
 //clouds//
fill(100,100,100);
  ellipse(50,0,100,40,);
  ellipse(350,0,100,40);
  ellipse(80,0,100,40);
  ellipse(320,0,100,40);
  ellipse(200,0,100,40);
  ellipse(180,0,100,40);
  ellipse(220,0,100,40);
}

function mousePressed(){
  backdropIndex=backdropIndex+1;
  if (backdropIndex>=backdrops.length) {
    backdropIndex=0;
  }
}

function keyPressed(){
  for (let s = 0; s < 10; s++) {
    snow.push(random(10,390));
    snowy.push(random(sty,sty+yd));
  }
  falling=true;
  snowheight=sty+yd;
}