//Jason Foster
//snow falling
//press g to grow
//press s to shrink

let snow= [];
snow.length=50;

function setup() {
  createCanvas(400, 400);
  for (let s = 0; s < snow.length; s++) {
    snow[s]= new Snow(random(width), random(height), 20);
    
  }
}

function draw() {
  background(50,100,250);
  strokeWeight(2);
  fill(200,100,50);
  triangle(0,400,200,200,400,400);
  //snow
 for (let s = 0; s < snow.length; s++) {
  fill(255,255,255);
  strokeWeight(0);
  snow[s].display();
  snow[s].size();
  snow[s].fall();
  
 }
 //clouds
fill(100,100,100);
  ellipse(50,0,100,40,);
  ellipse(350,0,100,40);
  ellipse(80,0,100,40);
  ellipse(320,0,100,40);
  ellipse(200,0,100,40);
  ellipse(180,0,100,40);
  ellipse(220,0,100,40);
}

class Snow{

  constructor(tempX,tempY,tempDiameter){
    this.x=tempX
    this.y=tempY
    this.diameter=tempDiameter
    this.move=1;
  }

  display(){
    //draw the snow
    circle(this.x,this.y,this.diameter)
  }

  size(){
//change the snow size
  if (keyIsPressed) {
    if (key==='g') {
    this.diameter++;
    } else if (key==='s') {
    this.diameter--;
    } 
    
  }

  }
    // makes the snow fall
  fall(){
if (this.y > height + 1) 
		{
			this.y = -1;
		} 
		else 
		{
			this.y+= this.move;
		}
  }
    
  }