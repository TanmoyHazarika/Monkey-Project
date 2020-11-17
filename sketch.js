
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600,600);
  monkey = createSprite(80,465,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(550,500,1500,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.y);
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
  survivalTime=0;

  
}


function draw() {
  background("white");
  
  
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }

   if(keyDown("space")&& monkey.y >=464) {
     monkey.velocityY=-15
      } 
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  food();
  obstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " +score,500,50);
  
  stroke("black");
  textSize(15);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime :" +survivalTime,450,50)
  
     
 drawSprites() 
}

function food(){
  if (frameCount % 80 === 0){
   var banana = createSprite(600,200,50,40);
    banana.addImage(bananaImage);
    banana.scale=0.1; 
     banana.y = Math.round(random(400,480));
   banana.velocityX=-5
    banana.lifetime = -1;
    FoodGroup.add(banana);
  }
}

function obstacles(){
  if (frameCount % 300 === 0){
    var obstacle = createSprite(600,475,50,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX = -5;
    obstaclesGroup.add(obstacle);
    
  
    
    
  }
}






