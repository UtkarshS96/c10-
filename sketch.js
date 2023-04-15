
var trex ,trex_running;
var ground, groundImage;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");

  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50, 160, 10, 40);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  ground = createSprite(200,180,400,20);
  ground.velocityX=-4;
  ground.addImage(groundImage);
  



  edges = createEdgeSprites();


 
}

function draw(){
  background("white")
  if (ground.x < 0){
    ground.x=ground.width/2;
  }

  if(keyDown("space")){
    trex.velocityY = -12;
  }
  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(ground);

  drawSprites();

}
