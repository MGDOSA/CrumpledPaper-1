
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3, ground;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Dustbin(645,625,10,50);
	box2 = new Dustbin(725,625,10,50);
	box3 = new Dustbin(685,650,75,10);
	ground = new Ground(400,700,800,50)
	paper = new Paper(100,50,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display()
  paper.display()
  box1.display()
  box2.display()
  box3.display()
  drawSprites();
  if(paper.x-box1.x < (box1.width+paper.width)/2){
 


  }
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-35})

	}



}


