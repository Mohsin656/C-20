var mrect, frect;

function setup() {
  createCanvas(800,400);
  mrect = createSprite(400, 200, 50, 50);
  frect = createSprite(300, 200, 50, 50);

  mrect.shapeColor = "green";
  frect.shapeColor = "green"
}

function draw() {
  background("black");  
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;
  if(mrect.x-frect.x < mrect.width/2 + frect.width/2 &&
     frect.x - mrect.x < mrect.width/2 + frect.width/2 
     && mrect.y-frect.y < mrect.height/2 + frect.height/2 &&
     frect.y - mrect.y < mrect.height/2 + frect.height/2) {
       mrect.shapeColor = "red"
       frect.shapeColor = "red"
     } else {
      mrect.shapeColor = "green"
      frect.shapeColor = "green"
     }


  drawSprites();
}