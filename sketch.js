var SERVE = 0;
var PLAY = 1;
var END = 2;
var gameState = SERVE;

var warrior, warrior_running,warrior1,warrior_jump;
var back_ground, background_image, invisibleGround;

function preload(){
  back_image = loadAnimation("background.png");
  warrior_running = loadAnimation("Warrior_Walk.gif");
  warrior_jump = loadAnimation("Warrior_Jump.gif");
  warrior_idle = loadAnimation("Warrior_IDLE.gif");
  warrior_attack = loadAnimation("Warrior_Attack.gif");
  warrior_skill = loadAnimation("Warrior_Skill.gif");
  warrior_hit= loadAnimation("Warrior_Hit.gif");
  enemy_walk = loadAnimation("Enemy_walk.gif");
  
}

function setup() {
  createCanvas(1900, 960);
  createEdgeSprites();
  
  back_ground = createSprite (1000,100);
  back_ground.addAnimation("displayImage",back_image);
  back_ground.scale = 3;
  back_ground.x = back_ground.width /2;
  console.log(back_ground.position.x);

  warrior = createSprite(100,800);
  warrior.addAnimation("running", warrior_running);
  warrior.scale = 1;
  warrior.addAnimation("jump1", warrior_jump);
  warrior.addAnimation("idle", warrior_idle);
  warrior.addAnimation("attack", warrior_attack);
  warrior.addAnimation("skill", warrior_skill);
  warrior.addAnimation("hit", warrior_hit);
  
  invisibleGround = createSprite(1000,950,2000,10);
  invisibleGround.visible = false;

  enemysGroup = new Group();
 
}

function draw() {
  background(180);
  
  // GameState is in play mode  
  if(gameState === 0){
    warrior.changeAnimation("idle",warrior_idle);
    back_ground.velocityX = 0;
    if(keyDown("ENTER")) {
      gameState = 1;
      warrior.changeAnimation("running",warrior_running);
      warrior.scale = 1;
    }
  }

  // GameState is in play mode
  if(gameState === 1) {
  back_ground.velocityX = -6;
	if(keyWentDown("space")) {
		warrior.velocityY = -15;
    warrior.changeAnimation("jump1",warrior_jump);
    warrior.scale = 1.4;
  }
  if(keyWentUp("space")) {
    warrior.changeAnimation("running",warrior_running);
    warrior.scale = 1;
  }
    warrior.velocityY = warrior.velocityY + 0.8;
  
  if (back_ground.x < 0){
    back_ground.x = back_ground.width/2;
  }
  warrior.collide(invisibleGround);
  console.log(frameCount);

  if(frameCount >= 300 ){
    spwanEnemy();
    if(frameCount > 300 && frameCount < 1400){
    back_ground.velocityX = 0;
    }
    if(keyDown("left")) {
      warrior.velocityX = -3;
      warrior.velocityY = 0;
    }
    if(keyDown("right")) {
      warrior.velocityX = 3;
      warrior.velocityY = 0;
    }
    if(keyDown("q")) {
      warrior.changeAnimation("attack", warrior_attack);

    }
    
  }

  if(frameCount >= 1900 ){
    spwanEnemy();
    if(frameCount > 1900 && frameCount < 3000){
    back_ground.velocityX = 0;
    }
    if(keyDown("left")) {
      warrior.velocityX = -3;
      warrior.velocityY = 0;
    }
    if(keyDown("right")) {
      warrior.velocityX = 3;
      warrior.velocityY = 0;
    }
    
  }

  if(frameCount >=3500 ){
    spwanEnemy();
    if(frameCount > 3500 && frameCount < 4600){
    back_ground.velocityX = 0;
    }
    if(keyDown("left")) {
      warrior.velocityX = -3;
      warrior.velocityY = 0;
    }
    if(keyDown("right")) {
      warrior.velocityX = 3;
      warrior.velocityY = 0;
    }
    
  }

  if(frameCount >= 5100 ){
    spwanEnemy();
    if(frameCount > 5100 && frameCount < 6200){
    back_ground.velocityX = 0;
    }
    if(keyDown("left")) {
      warrior.velocityX = -3;
      warrior.velocityY = 0;
    }
    if(keyDown("right")) {
      warrior.velocityX = 3;
      warrior.velocityY = 0;
    }
    
  }

  if(frameCount >= 6700 ){
    spwanEnemy();
    if(frameCount > 6700 && frameCount < 7800){
    back_ground.velocityX = 0;
    }
    if(keyDown("left")) {
      warrior.velocityX = -3;
      warrior.velocityY = 0;
    }
    if(keyDown("right")) {
      warrior.velocityX = 3;
      warrior.velocityY = 0;
    } 
  }
 }

  drawSprites();
  if(gameState === 0){
    fill("white");
    textSize(50);
    text("Play", 900, 280);
  }
  if(gameState === 1){
    if(frameCount > 290 && frameCount < 300 ){
    fill("red");
    textSize(50);
    text("Level 1", 800, 200);
    }
  }
}

//function mousePressed(){
  //
//}

function spwanEnemy() {
  if (frameCount % 400 === 0) {
    var enemy = createSprite(1700,780,100,100);
    enemy.addAnimation("enemyWalk",enemy_walk);
    enemy.velocityX = 0;
    enemysGroup.add(enemy);
  } 
}
