var moving,fixed;
function setup() {
  createCanvas(800,400);
 fixed= createSprite(400, 200, 50, 50);
 moving=createSprite(300,600,50,90)
}

function draw() {
  background(199,7,39); 
  moving.y=World.mouseY;
  moving.x=World.mouseX;
  if (moving.x-fixed.x<moving.width/2+fixed.width/2
    &&fixed.x-moving.x<fixed.width/2+moving.width/2
    &&moving.y-fixed.y<moving.height/2+fixed.height/2
    &&fixed.y-moving.y<fixed.height/2+moving.height/2){
      moving.shapeColor="red";
      fixed.shapeColor="blue";
    }
    else{
      moving.shapeColor="green";
      fixed.shapeColor="yellow";
    }
  drawSprites();
}