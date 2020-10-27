
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var ground1;
var TreeImage, tree1;

function preload()
{
	//TreeImage=loadImage("Plucking mangoes\tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 800,
		  height: 700,
		  wireframes: false
		}
	  });

	//Create the Bodies Here.
	ground1= new ground(400,700,800,20);
	 tree1= new tree(500,500);

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 

 ground1.display();
 tree1.display();
  //drawSprites();
 
}



