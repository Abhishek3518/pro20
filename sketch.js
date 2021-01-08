var bullet,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
speed=random(55,90)
weight=random(400,1500)
bullet=createSprite(50,200,50,50)
wall=createSprite(1500,280,60,height/2)
bullet.velocityX=speed
thickness=random(22,93)
}

function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0
    var deformation=0.5 *weight*speed*speed/thickness*thickness*thickness
    if(deformation>180 && deformation >100){
      bullet.shapeColor=color(230,230,0)
    }
    if(deformation<180){
      bullet.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}