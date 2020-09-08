var banana,obstacle,bananaimage,obstacleimage,obstaclegroup,
background1,score,monkey,monkeyimage,background1image,
ground,bananagroup;

function preload(){
  bananaimage=loadImage("Banana.png");
  obstacleimage=loadImage("stone.png");
  background1image=loadImage("jungle2.jpg");
  monkeyimage=loadAnimation("Monkey_01.png","Monkey_02.png",
  "Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png",
  "Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png"
          );
}


function setup(){
  createCanvas(400,400);
  background1=createSprite(200,200,10,10);
  background1.addImage(background1image);
  background1.scale=1;
  
  
  monkey=createSprite(94,330,10,10);
  monkey.addAnimation("m1",monkeyimage);
  monkey.scale=0.12;
  ground=createSprite(200,395,400,10);
  ground.visible=false;
  
  monkey.debug=false;
  monkey.setCollider("rectangle",0,0,200,600);
  bananagroup=new Group();
  obstaclegroup=new Group();
  score=0;
}


function draw(){
  
  //console.log(monkey.y);
  
  background(0);
     
  monkey.collide(ground);
  
  
  
    
      background1.velocityX=-6;
  if (background1.x<0){
    background1.x=background1.width/2;
    
  }
  
  if (keyDown("space") && monkey.y>=353){
    monkey.velocityY=-20;
  }
  monkey.velocityY=monkey.velocityY+0.8;  
    
if (obstaclegroup.isTouching(monkey)){
    monkey.scale=0.12;
      obstaclegroup.destroyEach();
  score=0; 
      }
  
    if (bananagroup.isTouching(monkey)){
   score=score+2;
      bananagroup.destroyEach();
      player();   
 }
 
  food();
  stones();
 
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,200,50);
}

function food(){
  
if (frameCount%60===0){
  banana=createSprite(400,200,10,10);
  banana.y=random(50,250);
  banana.addImage(bananaimage);
  banana.scale=0.05;
  banana.velocityX=-5;
  banana.lifetime=150;
  bananagroup.add(banana);
  
  
}
}

function stones(){
  if (frameCount%190===0){
  
  obstacle=createSprite(400,362,10,10);
  obstacle.addImage(obstacleimage);
  obstacle.scale=0.2;
  obstacle.velocityX=-3;
  obstacle.lifetime=150;
  obstaclegroup.add(obstacle);
  
  }
}

function player(){
  switch (score){
    case 10:monkey.scale=0.15;
      break;
      case 20:monkey.scale=0.16;
      break;
      case 30:monkey.scale=0.18;
  }
}


