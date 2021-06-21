
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var village, paper, dustbin, ground;

function setup() {
	createCanvas(700, 700);
	village = loadImage("village.jpg");

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(80,650,20,20);
	ground = new Ground(350,670,20,20);
	dustbin = new Dustbin(495,600,20, 20);

	Engine.run(engine);
  
}


function draw() {
  background(village);

  Engine.update(engine);

  paper.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
}
