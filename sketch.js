
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,boy,mango1;

function preload()
{
	treeImg = loadImage("pics/tree.png");
	boyImg = loadImage("pics/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=createSprite(550,400,100,5);
	tree.scale=0.4; 
	tree.addImage("trees",treeImg);

	boy=createSprite(150,580,10,10);
	boy.scale=0.1;
	boy.addImage("boy",boyImg);

	mango1 = new mango(500,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  mango1.dispaly();
  
  drawSprites();
 
}



