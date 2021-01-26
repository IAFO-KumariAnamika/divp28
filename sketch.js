
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,stone;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;




	mango1=new mango(1100,100,30);
   stoneObj=new Stone(100,460,23);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);




	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();

  groundObject.display();
}
	


function mouseDragged(){

Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
	stone.fly();
}

function detectCollision(lstones,lmango){
   mangoBodyPosition=lmango.body.position
   stoneBodyPosition=lstones.body.position

   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstones.r){
		Matter.Body.setStatic(lmango.body,false)
	}





}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		launcherObject.attach(stones.body);
	}
}