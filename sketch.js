var helicopter_img, helicopter, package,package_img;
var packageBody,ground;

var bottomgreenSprite, bottomgreenBody;
var leftSprite, rightSprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopter_img = loadImage("helicopter.png")
	package_img = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	package=createSprite(width/2, 80, 10,10);
	package.addImage(package_img);
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopter_img);
	helicopter.scale=0.6;

	leftSprite = createSprite(width/2 - 95, 625,20,75);
	leftSprite.shapeColor = "green";

	rightSprite = createSprite(width/2 + 95, 625,20,75);
	rightSprite.shapeColor = "green";

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	bottomgreenSprite = createSprite(width/2,height-50,200,20);
	bottomgreenSprite.shapeColor = "green";

	engine = Engine.create();
	world = engine.world;

	packageBody_options = 
	{
		isStatic:true,
		restitution:0.3
	}

	packageBody = Bodies.circle(width/2 , 200 , 5, packageBody_options);
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 //creting a body for the mission area. 
	bottomgreenBody = Bodies.rectangle(width/2, 635, width/4, 20, {isStatic:true} );
	 World.add(world, bottomgreenBody);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);

  background(0);

  package.x = packageBody.position.x; 
  package.y = packageBody.position.y;

  keyPressed();
  
  drawSprites();
}

function keyPressed() 
{
 if(keyDown("DOWN_ARROW"))
 {
    Matter.Body.setStatic(packageBody, false);
 }
}