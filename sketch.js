
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var ground1;
var tree1;
var stone1;
var boyImage, boy1;
var mango1, mango2, mango3, mango4, mango5;
var slingshot;
var launcherObject;

function preload()
{
	boyImage=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
	

	//Create the Bodies Here.
	ground1= new ground(800,700,1600,20);
	tree1= new NewTree(600,400,100,300);
	stone1= new Stone(130,500,30,10);
	mango1= new Mango(900,200,20);
	mango2= new Mango(960,200,20);
	mango3= new Mango(1000,200,20);
	mango4= new Mango(860,200,20);
	mango5= new Mango(930,150,20);
	slingshot= new SlingShot(stone1.body, {x:200,y:100});

	boy1=createSprite(150, 590, 10,10);
	boy1.addImage(boyImage);
	boy1.scale=0.2

	//launcherObject=new Slingshot(stone1.body,{x:235,y:420})
	

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  tree1.display();
 ground1.display();
 stone1.display();
mango1.display();
mango2.display();
mango3.display()
mango4.display();
mango5.display();
slingshot.display();

detectCollision(stone1, mango1);
detectCollision(stone1, mango2);
detectCollision(stone1, mango3);
detectCollision(stone1, mango4);
detectCollision(stone1, mango5);


 
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode===32)
	{
		Matter.Body.setPosition(stone1.body,{x:235,y:420});
		launcherObject.attach(stone1.body);
	}
}


function detectCollision(lstone,lmango)
{
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body, false)
	}
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    stone1.fly();
}



