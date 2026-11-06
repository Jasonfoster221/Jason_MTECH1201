let size=20;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  strokeWeight(3);
  point(100,100,20);
  point(200,200,20);
  point(300,300,20);
  point(380,380,20);

  for(x=size/2;x<width;x+=size){
    let y=50;
    strokeWeight(5);
    point(x,y,20,);
  }
  for(y=size/2;y<height;y+=size) {
    let x=50;
    strokeWeight(4);
    point(x,y,20);
}
  
}
