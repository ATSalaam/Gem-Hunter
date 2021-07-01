const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var menu, game, player;

var bg, bgImg, bg2, bg3, bg4, bg5;
var spikeTrap_Img, fireBallTrap_Img, fallingFloor_Img;
var player_Img, platform_Img;

function preload(){
    bgImg = loadImage("../images/Entrance.jpg");
    bg2 = loadImage("../images/Level bg1.jpg");
    bg3 = loadImage("../images/Entrance.jpg");
    spikeTrapImg = loadImage("images/Spike trap.jpg");
    fireBallTrapImg = loadImage("images/fireball.gif");
    fallingFloorImg = loadImage("images/Falling floor.png");

    platform_Img = loadImage("../images/Platform.png");
    player_Img = loadImage("../images/Henry.png");
}

function setup(){
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  bg = createSprite(400, 200, 800, 400);
  bg.addImage(bgImg);
  game = new Game();
  game.start();
}

function draw() {
  background(255,255,255);
  if(game.gameState === 1){
    bg.addImage(bg2);
    bg.scale = 1.5
    game.play();
  }
  //console.log(game.gameState);
  //console.log(game.level);
  drawSprites();
}