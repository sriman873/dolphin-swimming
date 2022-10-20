//To declare the globalVariables 
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var dolpin,dolpinImg;
var images2,images2Img;
var fish,fishImg;
var fish1,fish1Img;
var fish2,fish2Img;
var fish3,fish3Img;
var shark,sharkImg;
var g1,g2,g3,g4;
var score;
var gameover,gameoverImg;
var restart,restartImg
var water,gameoverSound,waterSound;
var start,startImg;
var horse1,horse1Img;
var horse2,horse2Img;
var horse3,horse3Img;
var logo,logoImg;

//To load the images
function preload(){
  
  dolpinImg=loadImage("dolpin.png");
  images2Img=loadImage("images (11).jpg");
  fishImg=loadImage("fish.png");
  fish1Img=loadImage("fish1.png");
  fish2Img=loadImage("fish2.png");
  fish3Img=loadImage("fish3.png");
  sharkImg=loadImage("shark.png");
  gameoverImg=loadImage("gameover.gif");
  restartImg=loadImage("restart.png");
  water=loadSound("water.mp3");
  gameoverSound = loadSound("gameover.mp3");
  waterSound=loadSound("waterSound.mp3");
  startImg=loadImage("Start.png");
  horse1Img=loadImage("horse1.png");
  horse2Img=loadImage("horse2.png"); 
  horse3Img=loadImage("horse3.png");
  logoImg=loadImage("logo.png");

}


function setup() {
  
  //to create the canvas
  createCanvas(1400, 620);
  
  g1=createSprite(300,5,600,10);
  g2=createSprite(300,615,600,10);
  g3=createSprite(55,275,50,10);
  g4=createSprite(1395,310,10,620);
  g1.depth=-1;
  g2.depth=-1;
  g3.depth=-1;
  g4.depth=-1;

  
  //To create the backGround image sprites
  images2=createSprite(300,80);
  images2.addImage(images2Img);
  images2.x = images2.width/2;
  images2.scale=10;
  images2.depth=-1;

  start=createSprite(180,195);
  start.addImage(startImg);
  start.scale=2;
  
  logo=createSprite(700,310);
  logo.addImage(logoImg);
  logo.scale=3.5;
  logo.lifetime=200;
  

  //To create the player Sprite
  dolpin=createSprite(50,250);
  dolpin.addImage(dolpinImg);
  dolpin.scale=0.15;
  dolpin.depth=-1;
  
  gameover=createSprite(700,100);
  gameover.addImage(gameoverImg);
  gameover.visible=false;
  gameover.scale=1.5;
  gameover.depth=-1;
  
  restart=createSprite(700,500);
  restart.addImage(restartImg);
  restart.visible=false;
  restart.scale=1.5;  
  restart.depth=-1;

  
  fish1Group = new Group();
  fish2Group = new Group();
  fish3Group = new Group();
  fish4Group = new Group();
  sharkGroup = new Group();
  horse1Group = new Group();
  horse2Group = new Group();
  horse3Group = new Group();
 
  
  score = 0;
}

function draw() {
  //To give the color to the background
  background(255);

  drawSprites();

  if(gameState === PLAY){

    fill("cyan");
    textSize(40);
    textFont("Score")
    text("Score: "+ score, 1000,50);
      
  if (fish1Group.isTouching(dolpin)){
    fish1Group.destroyEach();
    water.play();
    score=score+2; 
  }
      
  if (fish2Group.isTouching(dolpin)){
    fish2Group.destroyEach();
    water.play();
    score=score+4; 
  }
      
  if (fish3Group.isTouching(dolpin)){
    fish3Group.destroyEach();
    water.play();
    score=score+8; 
  }
      
  if (fish4Group.isTouching(dolpin)){
    fish4Group.destroyEach();
    water.play();
    score=score+10; 
  }

  if (horse1Group.isTouching(dolpin)){
    horse1Group.destroyEach();
    water.play();
    score=score+12; 
  }

  if (horse2Group.isTouching(dolpin)){
    horse2Group.destroyEach();
    water.play();
    score=score+14; 
  }

  if (horse3Group.isTouching(dolpin)){
    horse3Group.destroyEach();
    water.play();
    score=score+16; 
  }
        
  //To reset the background
  if (images2.x < 0){
    images2.x = images2.width/2;
  }
    
  //To make dolpin jump when space pressed
  if(keyDown("space") && dolpin.y >= 150) {
    dolpin.velocityY = -12.5;
  }
      
  //To give gravity to dolpin
  dolpin.velocityY = dolpin.velocityY + 1;

  //To spawn the fishes and shark
  spawnFish1();
  spawnFish2();
  spawnFish3();
  spawnFish4();
  spawnShark();
  spawnHorse1();
  spawnHorse2();
  spawnHorse3();
      
  if(sharkGroup.isTouching(dolpin)){
    gameoverSound.play(); 
    gameover.visible=true;
    restart.visible=true;
    sharkGroup.destroyEach();
    fish1Group.destroyEach();
    fish2Group.destroyEach();
    fish3Group.destroyEach();
    fish4Group.destroyEach();
    horse1Group.destroyEach();
    horse2Group.destroyEach();
    horse3Group.destroyEach();
    fish1Group.velocityX=-0;
    fish2Group.velocityX=-0;
    fish3Group.velocityX=-0;
    fish4Group.velocityX=-0;
    sharkGroup.velocityX=-0;
    horse1Group.velocityX = -0;
    horse2Group.velocityX = -0;
    horse3Group.velocityX = -0;
    dolpin.velocityY=0;
    images2.velocityX=-0;
    gameState = END;
    
  }
    
  if(dolpin.isTouching(g2)){  
    gameoverSound.play(); 
    gameover.visible=true;
    restart.visible=true;
    sharkGroup.destroyEach();
    fish1Group.destroyEach();
    fish2Group.destroyEach();
    fish3Group.destroyEach();
    fish4Group.destroyEach();
    horse1Group.destroyEach();
    horse2Group.destroyEach();
    horse3Group.destroyEach();
    fish1Group.velocityX=-0;
    fish2Group.velocityX=-0;
    fish3Group.velocityX=-0;
    fish4Group.velocityX=-0;
    sharkGroup.velocityX=-0;
    horse1Group.velocityX = -0;
    horse2Group.velocityX = -0;
    horse3Group.velocityX = -0;
    dolpin.velocityY=0;
    images2.velocityX=-0;
    gameState = END;
            
  }

  if(mousePressedOver(start)){
    
    score = 0;
    gameState = PLAY;
    start.visible=false;
    fish1Group.velocityX=-10;
    fish2Group.velocityX=-10;
    fish3Group.velocityX=-10;
    fish4Group.velocityX=-10;
    sharkGroup.velocityX=-10;
    horse1Group.velocityX=-10;
    horse2Group.velocityX=-10;
    horse3Group.velocityX=-10;
    dolpin.velocityY=-13;
    images2.velocityX=-4;
    g3.destroy();
    g4.destroy();

  }  
      
  }
    
  else if(gameState === END){
      
      
  if(mousePressedOver(restart)){
    waterSound.play();
    reset();
  }
      
  fill("cyan");
  textSize(80);
  textFont("Score");
  textAlign(CENTER);
  text("Score: "+ score, 700,300);
      
  }
    
  dolpin.collide(g2);
  dolpin.collide(g3);
  sharkGroup.collide(g4);
  horse1Group.collide(g4);
  horse2Group.collide(g4);
  horse3Group.collide(g4);
  fish1Group.collide(g4);
  fish2Group.collide(g4);
  fish3Group.collide(g4);
  fish4Group.collide(g4);    
 

  }

//Function to spawn the fish1
function spawnFish1() {
  if (frameCount % 100 === 0) {
    var fish1 = createSprite(1400,100);
    fish1.y = Math.round(random(10,600));
    fish1.addImage(fishImg);
    fish1.scale = 0.1;
    fish1.velocityX=-10;
    fish1.depth=-1;
    fish1.lifetime = 140;
    fish1Group.add(fish1);
  
   
  }
  
}

//Function to spawn the fish2
function spawnFish2() {
  if (frameCount % 150 === 0) {
    var fish2 = createSprite(1400,200);
    fish2.y = Math.round(random(10,600));
    fish2.addImage(fish1Img);
    fish2.scale = 0.1;
    fish2.velocityX = -10;
    fish2.depth=-1;
    fish2.lifetime = 140;
    fish2Group.add(fish2);
    
  }
  
}

//Function to spawn the fish3
function spawnFish3() {
  if (frameCount % 200 === 0) {
    var fish3 = createSprite(1400,300);
    fish3.y = Math.round(random(10,600));
    fish3.addImage(fish2Img);
    fish3.scale = 0.1;
    fish3.velocityX = -10;
    fish3.depth=-1;
    fish3.lifetime = 140;
    fish3Group.add(fish3);
    
   
  }
  
}

//Function to spawn the fish4
function spawnFish4() {
  if (frameCount % 250 === 0) {
    var fish4 = createSprite(1400,500);
    fish4.y = Math.round(random(10,600));
    fish4.addImage(fish3Img);
    fish4.scale = 0.1;
    fish4.velocityX = -10;
    fish4.depth=-1;
    fish4.lifetime = 140;
    fish4Group.add(fish4);
   
  }
  
}

//Function to spawn the shark
function spawnShark() {
  if (frameCount % 80 === 0) {
    var shark = createSprite(1400,500);
    shark.y = Math.round(random(10,600));
    shark.addImage(sharkImg);
    shark.scale = 0.5;
    shark.velocityX = -10;
    shark.depth=-1;
    shark.lifetime = 140;
    sharkGroup.add(shark);
    
  }
  
}

function spawnHorse1() {
  if (frameCount % 350 === 0) {
    var horse1 = createSprite(1400,500);
    horse1.y = Math.round(random(10,600));
    horse1.addImage(horse1Img);
    horse1.scale = 0.5;
    horse1.velocityX = -10;
    horse1.depth=-1;
    horse1.lifetime = 140;
    horse1Group.add(horse1);

    
  }
  
}
function spawnHorse2() {
  if (frameCount % 450 === 0) {
    var horse2 = createSprite(1400,500);
    horse2.y = Math.round(random(10,600));
    horse2.addImage(horse2Img);
    horse2.scale = 0.5;
    horse2.velocityX = -10;
    horse2.depth=-1;
    horse2.lifetime = 140;
    horse2Group.add(horse2);

    
  }
  
}
function spawnHorse3() {
  if (frameCount % 550 === 0) {
    var horse3 = createSprite(1400,500);
    horse3.y = Math.round(random(10,600));
    horse3.addImage(horse3Img);
    horse3.scale = 0.5;
    horse3.velocityX = -10;
    horse3.depth=-1;
    horse3.lifetime = 140;
    horse3Group.add(horse3);

    
  }
  
}


function reset(){
  score = 0;
  gameState = PLAY;
  gameover.visible=false;
  restart.visible=false;
  fish1Group.velocityX=-10;
  fish2Group.velocityX=-10;
  fish3Group.velocityX=-10;
  fish4Group.velocityX=-10;
  sharkGroup.velocityX=-10;
  horse1Group.velocityX=-10;
  horse2Group.velocityX=-10;
  horse3Group.velocityX=-10;
  dolpin.velocityY=-13;
  images2.velocityX=-4;
    
  
}