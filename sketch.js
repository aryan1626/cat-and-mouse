var cat;
var mouse;
var sittingcatImg1;
var teasingmouseImg;
var sittingcatImg2;
var movingcatImg; 
var gardenImg;
var movingmouseImg;
var happymouseImg;

function preload() {
    //load the images here
sittingcatImg1 = loadImage("cat1.png");
sittingcatImg2 = loadImage("cat4.png");
movingcatImg = loadAnimation("cat2.png","cat3.png");
teasingmouseImg = loadAnimation("mouse2.png","mouse3.png");
happymouseImg = loadImage("mouse1.png");
susmouseImg = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(200,200);
    cat.addAnimation("walkingcat",movingcatImg);
    cat.scale = 0.1;
    
    mouse = createSprite(100,200);
    mouse.addImage("lookingmouse",susmouseImg);
    mouse.scale = 0.01;
}

function draw() {

if(cat.x - mouse.x < (cat.width - mouse.width)/2){
}

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
}

if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("teasingmouse",teasingmouseImg);
    mouse.changeAnimation("teasingmouse");
    mouse.fremeDelay = 25;
}