//principal
var jardim,cachorro;
//imagens
var jardimImg,cachorroImg;

var cantos;
//coisas que caem
var osso,pneu,chocolate;
//imagens
var ossoImg,pneuImg,chocolateImg;

function preload(){
  jardimImg = loadImage("garden.png");
  cachorroImg = loadImage("cachorro.png");
  
  ossoImg = loadImage("osso.png");
  pneuImg = loadImage("pneu.png");
  chocolateImg = loadImage("chocolate.png");
}

function setup(){
  
  createCanvas(400,400);
  //fundo bem loko
  jardim = createSprite(200,200);
  jardim.addImage(jardimImg);
  //cachorro aparecimento
  cachorro = createSprite(200,360);
  cachorro.addImage(cachorroImg);
  cachorro.scale = 0.1;
 
 
  
  
  
  
}


function draw() {
  background(0);
  drawSprites();

cachorro.x = mouseX;
//Nomes bem lokos
createOsso();
createPneu();
createChocolate();
 
//osso nham nham
function createOsso() {
osso = createSprite(random(50,350),40,10,10);
osso.addImage(ossoImg);
osso.scale = 0.12;
osso.VelocityY = 3;
osso.lifetime = 150;
}
    //pneu bruh
function createPneu() {
  pneu = createSprite(random(50,350),40,10,10);
  pneu.addImage(pneuImg);
  pneu.scale = 0.07;
  pneu.VelocityY = 3;
  pneu.lifetime = 150;
  }
    //chocolate(NÃO PODE!!!)
  function createChocolate() {
    chocolate= createSprite(random(50,350),40,10,10);
    chocolate.addImage(chocolateImg);
    chocolate.scale = 0.07;
    chocolate.VelocityY = 3;
    chocolate.lifetime = 150;
    }   
  var cairCoisas = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (cairCoisas == 1){
      createOsso();
   } else if (cairCoisas == 2) {
      createPneu();
   } else if (cairCoisas == 3) {
      createChocolate();
   }
  }
}
