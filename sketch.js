  
var céuImg,céu;
var meteoroImg, meteoro, meteoroGroup;
//var climberImg, climber, climbersGroup;
var ptero, pteroImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  céuImg = loadImage("céu.jpg");
  meteoroImg = loadImage("Meteor-Comet-PNG.png");
  //climberImg = loadImage("climber.png");
  pteroImg = loadImage("pterodactyl-clipart-lg.png");
  //spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  //spookySound.loop();
  céu = createSprite(300,300);
  céu.addImage("céu",céuImg);
  céu.velocityY = 1;
  
  meteoroGroup = new Group();
  //climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ptero = createSprite(200,200,50,50);
  ptero.scale = 0.05;
  ptero.addImage("ptero", pteroImg);
}


function draw() {
  background(255);
 if(céu.y > 400){
      céu.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
        ptero.x = ptero.x - 3;

      // escreva o código para mover para a esquerda quando a tecla para a esquerda for pressionada
    }
    if(keyDown("right_arrow")){
  
          ptero.x = ptero.x + 3;

      // escreva o código para mover para a direita quando a tecla para a direita for pressionada
      
    }
    if(keyDown("space")){
  
      ptero.velocityY = -10;

      // escreva o código para mover para cima quando a tecla espaço for pressionada
      
    }
  
    ptero.velocityY = ptero.velocityY + 0.8;
  
   
      //escreva uma condição para a torre de rolagem infinita
    
      spawnMeteoro();

  
//escreva um código para fazer invisibleBlockGroup (grupo de bloco invisível) colidir com o fantasma, destruir o fantasma e mudar o estado do jogo para end.
     
    if(meteoroGroup.isTouching(ptero) || ptero.y > 600){
      ptero.destroy();
      gameState = "end"
    }
    

  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnMeteoro()
 {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 240 === 0) {
    var meteoro = createSprite(200, -50);
    //var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = meteoro.width;
    invisibleBlock.height = 2;
    //adicione a função aleatória
    meteoro.x= Math.round(random(120,400));
    meteoro.addImage(meteoroImg);
    meteoro.scale = 0.1
    //climber.addImage(climberImg);
    invisibleBlock.x = meteoro.x;
    meteoro.velocityY = 1;
    //climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //mude a profundidade do fantasma e da porta
    
    
    
    
    ptero.depth = meteoro.depth;
    ptero.depth += 1;
    
    //atribuir tempo de vida para a porta, escalador e bloco invisível

    meteoro.lifetime = 800;
    //climber.lifetime = 800;
    invisibleBlock.lifetime = 800;
    //adicione cada obstáculo ao grupo obstaclesGroup.add(obstacle); aqui os obstáculos são as portas, o escalador e o bloco invisível
    
     meteoroGroup.add(meteoro);
    invisibleBlock.debug = true;
    //climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

