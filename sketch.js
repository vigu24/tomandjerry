var tom,jerry,ti,ji,bg
function preload() {
    //load the images here
ti=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png","images/mouse4.png");


}

function setup(){
    createCanvas(400,400);
    //create tom and jerry sprites here/
tom=createSprite(200,200,20,20)
tom.addAnimation("ti")
jerry=createSprite(200,300,20,20)


}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
