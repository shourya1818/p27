//miss there is a problem showing that constraints is not defined
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint
var bobDiameter
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1 = new Bob(155,575,50,50);
bobObject2 = new Bob(210,575,50,50);
bobObject3 = new Bob(265,575,50,50);
bobObject4 = new Bob(320,575,50,50);
bobObject5 = new Bob(475,575,50,50);
roofobject = new Roof(400,80,700,40)
rope1 = new Rope(bobObject1.body,roofobject.body,-bobDiameter*2,0)
rope2 = new Rope(bobObject2.body,roofobject.body,-bobDiameter*2,0)
rope3 = new Rope(bobObject3.body,roofobject.body,-bobDiameter*2,0)
rope4 = new Rope(bobObject4.body,roofobject.body,-bobDiameter*2,0)
rope5 = new Rope(bobObject5.body,roofobject.body,-bobDiameter*2,0)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  roofobject.display();
  drawSprites();
 
}



