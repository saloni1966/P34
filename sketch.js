
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(350,100,230,20);
	bob1 = new Paper(270,300,20);
	bob2 = new Paper(310,300,20);
	bob3 = new Paper(350,300,20);
	bob4 = new Paper(390,300,20);
	bob5 = new Paper(430,300,20);
	
	r1 = new Rope(bob1.body,roof.body,-80)
	r2 = new Rope(bob2.body,roof.body,-40)
	r3 = new Rope(bob3.body,roof.body,0)
	r4 = new Rope(bob4.body,roof.body,40)
	r5 = new Rope(bob5.body,roof.body,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof .display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  
  drawSprites();
 
}

function mouseDragged(){

	Matter.Body.setPosition(bob1.body,{x : mouseX,y:mouseY});

}


