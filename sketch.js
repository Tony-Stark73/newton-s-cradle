
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint



function setup() {
	createCanvas(1200, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
const ra=40;
bobx=width/2
boby=height-100
roof=new Roof(600,80,1550,20);
bob1=new Bob(bobx-(2*ra),boby,ra)
bob2=new Bob(bobx-ra,boby,ra)
bob3=new Bob(bobx,boby,ra)
bob5=new Bob(bobx+(2*ra),boby,ra)
bob4=new Bob(bobx+ra,boby,ra)
rope1=new rope(bob1.body,roof.body,-4*ra,0)
rope2=new rope(bob2.body,roof.body,-2*ra,0)
rope3=new rope(bob3.body,roof.body,0,0)
rope4=new rope(bob4.body,roof.body,2*ra,0)
rope5=new rope(bob5.body,roof.body,4*ra,0)


Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(225);
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

console.log(rope1)

 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:-285});
	 }
	}