//JASON FOSTER//
//Snow Fall//

let isfalling=false;
let sty=0;
let size=20;

function setup() {
  createCanvas(400,400);
}

function draw() {
  //mountain//
  background(0,0,0);
  strokeWeight(2);
  fill(165,52,42);
  triangle(0,400,200,200,400,400);
  //moon//
  fill(255,255,255);
  circle(400,0,100);
  strokeWeight(0);
  //stars//
  fill(255,255,0);
  quad(50,65,85,50,50,40,15,50);
  quad(350,65,385,50,350,40,315,50);
  quad(50,315,85,300,50,290,15,300);
  quad(350,315,385,300,350,290,315,300);
  quad(200,125,235,110,200,100,165,110);
  //making the snow//
  if (isfalling==true) {
    sty=sty+1;
    for (let x=size/2;x<width;x+=size){
     let y=sty;
     let loop=0;
      while (loop<30) {
        fill(255,255,255);
        let ex=random(x-10,x+10);
        let ey=random(y-10,y+10);
        circle(ex,ey,size);
        y+=size+10;
        loop=loop+1;
       }
    }
  }
  if (sty==400) {
     isfalling=false;
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
//start//
function mousePressed() {
  isfalling=true;
  sty=0;
}
