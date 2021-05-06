var bullet,wall;
var speed,weight,thickness

function setup() {
  createCanvas(1600,400);
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

  bullet=createSprite(50,200,50,10);
  bullet.shapeColor="blue";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="brown";
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
  

  var deformation=0.5*weight*speed*speed/22500;
  if(deformation>180){
    bullet.shapeColor="orange";
  }
  if(deformation<180 && deformation>100){
    bullet.shapeColor="yellow";
  }
  if(deformation<100){
    bullet.shapeColor="pink";
  }
  }
  console.log(bullet.x+bullet.width);
  console.log(wall.x);
 hasCollided();

  if(hasCollided(bullet,wall)){
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
bullet.velocityX=0;
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }
  }
}

