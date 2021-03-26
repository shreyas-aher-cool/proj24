
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;
var stone;
var rubber;
var sand1,sand2,sand3,sand4,sand5,sand6;
var iron1;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=new Hammer(100,200,100,50);
	plane=new Plane(300,height,1200,20);
	stone= new Stone(600,100,70,70);
	rubber=new  Rubber(500,400,20);
	sand1=new Sand(200,200,5);
	sand2=new Sand(300,200,5);
	sand3=new Sand(400,200,5);
	sand4=new Sand(500,200,5);
	sand5=new Sand(600,200,5);
	sand6=new Sand(700,200,5);
	iron1=new Iron(400,700,50,50);


	
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);


	hammer.display();
	plane.display();
	stone.display();
	rubber.display();
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
    sand5.display();
	sand6.display();
	iron1.display();






  drawSprites();
 
}



