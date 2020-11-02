var gameState;
var Castle,Finn_Dead,Finn_Jumping,Finn_Running,Finn_Sitting,Finn_Sliding,Finn_Sneaking,Finn_Walking,Finn_Img;
var titleImg,Title;
var King_Img,King;
function preload(){
  Castle=loadImage("Castle.jpg");
  Finn_Dead=loadImage("Finn_Dead.png");
  Finn_Jumping=loadImage("Finn_Jumping.png");
  Finn_Running=loadImage("Finn_Running.png");
  Finn_Sitting=loadImage("Finn_Sitting.png");
  Finn_Sliding=loadImage("Finn_Sliding.png");
  Finn_Sneaking=loadImage("Finn_Sneaking.png");
  Finn_Walking=loadImage("Finn_Walking.png");
  Finn_Img=loadImage("Finn.png");
  titleImg=loadImage("title.jpg");
  King_Img=loadImage("King.jpg");
}

function setup(){
createCanvas(1200,500);
gameState = "Start";
Title=createSprite(600,50,10,10);
Title.addImage(titleImg);
Title.visible=false;
Finn=createSprite(50,390,100,50);
Finn.addImage(Finn_Img);
Finn.visible=false;
King=createSprite(1130,370,50,50);
King.addImage(King_Img);
King.visible=false;
}

function draw(){
  background("black");
  if(gameState==="Start"){
   Title.visible=true;
  Finn.visible=true;
  King.visible=true;
  textSize(25);
  fill("red");
text("James VIth has put Finn in jail in a black room because Finn was against James",130,275);
text("to limit his monarchial powers. Help Finn to escape the king’s (James VIth) castle",130,300);
text("using your skill and IQ to win the game and save Finn’s life or Finn will be sentenced",130,325);
text("to death by the king.Try your best to win the game and save Finn from the evil King!!!",130,350);
fill("white");
text("Press Space to start the game!!",400,450);
  }
if(keyCode===32){
  Title.visible=false;
  Finn.visible=false;
  King.visible=false;
  text.visible=false;
 }
  drawSprites();
}