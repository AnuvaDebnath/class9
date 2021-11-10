
function setup() {
  createCanvas(400,400);
box=createSprite(200,200,50,20)
                 
}

function draw() 
{
  background(30);
  if(keyDown("left")){
  box.x=box.x-10
  }
  if(keyDown("right")){
   box.x=box.x+10
  }

  drawSprites()

}




