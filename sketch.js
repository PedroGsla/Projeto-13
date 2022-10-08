//principal
var jardim,cachorro;
//imagens
var jardimImg,cachorroImg;

var cantos;
//coisas que caem
var osso,pneu,chocolate;
//imagens
var ossoImg,pneuImg,chocolateImg;
//placar
var placar = 0; 
//grupos
var grupoOsso;
var grupoChocoPineu;
//estado jogo
var EstadoJogo = "jogando";
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

  grupoOsso = new Group();
  grupoChocoPineu = new Group();



  
  
}


function draw() {
  background(0);
  drawSprites();
  textSize(18);
  fill("white");
  text(+placar,300,50);
if (EstadoJogo === "jogando"){

cachorro.x = mouseX;
  if (cachorro.isTouching(grupoOsso)){
    osso.remove();
placar = placar+1;
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

function createOsso() {
  //osso nham nham
  osso = createSprite(random(50,350),40,10,10);
  osso.addImage(ossoImg);
  osso.scale = 0.12;
  osso.velocityY = 3;
  osso.lifetime = 150;
  grupoOsso.add(osso);
  }
  //chocolate(NÃO PODE!!!)
  function createChocolate() {
    chocolate= createSprite(random(50,350),40,10,10);
    chocolate.addImage(chocolateImg);
    chocolate.scale = 0.07;
    chocolate.velocityY = 3;
    chocolate.lifetime = 150;
    grupoChocoPineu.add(chocolate);
    }  
    //pneu bruh 
    function createPneu() {
      pneu = createSprite(random(50,350),40,10,10);
      pneu.addImage(pneuImg);
      pneu.scale = 0.07;
      pneu.velocityY = 3;
      pneu.lifetime = 150;
      grupoChocoPineu.add(pneu);
    }

      if (cachorro.isTouching(grupoChocoPineu)){
        EstadoJogo = "acabou";
      }
      }
      //Estado Jogo === Acabou
      if(EstadoJogo === "acabou"){
        textSize(30);
        fill("yellow");
        text("VOCÊ PERDEU",100,200);
      }  
    }