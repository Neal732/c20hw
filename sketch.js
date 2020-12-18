var car, wall;
var speed, weight;

function setup() {
  createCanvas(1000,400);
 
  speed=random(55,90)
  weight=random(400,1500)

  wall=createSprite(950,200,60,height/2);
  wall.shapeColor="white";

  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor="white";
}

function draw() {
  background(20); 
  text(deformation,500,200);
  
  if(wall.x-car.x< (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=(0.5*weight*speed*speed)/22500
    if(deformation>180){
      car.shapeColor="red";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
    }
    if(deformation<100){
      car.shapeColor="green";
    }
  }

  drawSprites();
}