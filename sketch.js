var fixedRect,movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1600,400);
  fixedRect = createSprite(200,200,50,80);
  movingRect =  createSprite(400,200,80,30);
  fixedRect.shapeColor ="green";
  movingRect.shapeColor = "green";

  gameobject1=createSprite(100,100,50,50);
  gameobject1.shapeColor="green";

  gameobject2=createSprite(200,100,50,50);
  gameobject2.shapeColor="green";

  gameobject3=createSprite(300,100,50,50);
  gameobject3.shapeColor="green";

  gameobject4=createSprite(400,100,50,50);
  gameobject4.shapeColor="green";
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,gameobject2))
{
  gameobject2.shapeColor="blue";
    movingRect.shapeColor="blue";
}
else{
  gameobject2.shapeColor="green";
  movingRect.shapeColor="green";
}
bounceOff(movingRect,gameobject2)
  drawSprites();
}

