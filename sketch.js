
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var BananaGroup, obstacleGroup
var survivaltime;
var Score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation( "moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  
  ground.x = ground.width/2;
  console.log(ground.x);
  
  BananaGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background(255);
  

  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  
  
  if(keyDown("space") ) {
    
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
 
  
  
  
  
  
  if(frameCount % 80 === 0) {
    
  banana = createSprite(300,120,40,10);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
banana.velocityX = -4;
    banana.lifetime = 390;
    banana.depth = monkey.depth;
 monkey.depth = banana.depth+1;
    
    BananaGroup.add(banana);

  }
  
    if(frameCount % 300 === 0) {
      obstacle = createSprite(300,330,10,40);
      obstacle.addImage(obstacleImage);
      
      obstacle.scale = 0.1;
      obstacle.velocityX = -4;
      obstacle.lifetime = 390;
        
      obstacleGroup.add(obstacle);
    }  
var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ Score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+survivalTime,100,50);
  
  
  drawSprites();
  
}

 







